
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Standard client for non-Veo/Pro-Image tasks
export const getGeminiClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCustomMenu(preferences: string, userLocation?: { lat: number, lng: number }) {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a bespoke fine-dining menu for a private event in London based on these preferences: ${preferences}. Include appetizer, main, and dessert. Use local seasonal ingredients.`,
    config: {
      tools: [{ googleSearch: {} }],
    }
  });
  return {
    text: response.text,
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
  };
}

export async function findLocalIngredients(item: string, lat: number, lng: number) {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Where can I find high-quality ${item} near my current location in London?`,
    config: {
      tools: [{ googleMaps: {} }],
      toolConfig: {
        retrievalConfig: {
          latLng: { latitude: lat, longitude: lng }
        }
      }
    }
  });
  return {
    text: response.text,
    maps: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
  };
}

export async function editFoodImage(base64Image: string, prompt: string) {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType: 'image/png' } },
        { text: prompt }
      ]
    }
  });
  
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}

export async function generateFoodVideo(base64Image: string, prompt: string) {
  // Veo requires user-selected API key
  if (!window.aistudio?.hasSelectedApiKey || !window.aistudio.hasSelectedApiKey()) {
    await window.aistudio?.openSelectKey();
  }
  
  // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'The food starts to steam and shimmer elegantly under soft light',
      image: {
        imageBytes: base64Image,
        mimeType: 'image/png',
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    // If the request fails with "Requested entity was not found.", prompt the user to select a key again.
    if (error.message?.includes("Requested entity was not found")) {
      await window.aistudio?.openSelectKey();
    }
    throw error;
  }
}

export async function speakText(text: string) {
  const ai = getGeminiClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Speak elegantly as a luxury chef: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });
  
  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64Audio) return null;
  
  return base64Audio;
}
