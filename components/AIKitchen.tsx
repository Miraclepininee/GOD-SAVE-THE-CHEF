
import React, { useState, useRef } from 'react';
import { generateCustomMenu, editFoodImage, generateFoodVideo, findLocalIngredients } from '../services/gemini';

const AIKitchen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'visual' | 'maps'>('menu');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMenuGen = async () => {
    setIsLoading(true);
    try {
      const data = await generateCustomMenu(input);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMapsGen = async () => {
    setIsLoading(true);
    try {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const data = await findLocalIngredients(input, pos.coords.latitude, pos.coords.longitude);
        setResult(data);
      }, async () => {
        // Fallback to central London
        const data = await findLocalIngredients(input, 51.5074, -0.1278);
        setResult(data);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleImageEdit = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const newUrl = await editFoodImage(base64, input || "Add professional studio lighting and fresh herbs");
        if (newUrl) setPreviewUrl(newUrl);
      };
      reader.readAsDataURL(selectedFile);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoGen = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const videoUrl = await generateFoodVideo(base64, input || "Slow pan across the beautifully plated dish with rising steam");
        setPreviewUrl(videoUrl);
      };
      reader.readAsDataURL(selectedFile);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-kitchen" className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Digital Kitchen</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">Experience our bespoke process through AI. Plan your dream menu, source the finest ingredients, or visualize your event's culinary aesthetic.</p>
        </div>

        <div className="bg-stone-800 rounded-3xl p-8 border border-stone-700 shadow-2xl">
          <div className="flex space-x-4 mb-8 border-b border-stone-700 pb-4">
            <button onClick={() => setActiveTab('menu')} className={`pb-2 px-4 transition-colors ${activeTab === 'menu' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-stone-400'}`}>Menu Planner</button>
            <button onClick={() => setActiveTab('visual')} className={`pb-2 px-4 transition-colors ${activeTab === 'visual' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-stone-400'}`}>Visual Studio</button>
            <button onClick={() => setActiveTab('maps')} className={`pb-2 px-4 transition-colors ${activeTab === 'maps' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-stone-400'}`}>Sourcing</button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {activeTab === 'menu' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Dream Your Menu</h3>
                  <p className="text-sm text-stone-400">Describe your occasion, dietary needs, or favorite cuisines.</p>
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. A 5-course Pan-Asian celebration for a 40th birthday with gluten-free options..."
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl p-4 h-32 focus:ring-2 focus:ring-amber-600 outline-none"
                  />
                  <button 
                    disabled={isLoading}
                    onClick={handleMenuGen}
                    className="w-full bg-amber-600 hover:bg-amber-500 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
                  >
                    {isLoading ? 'Cheffing up your menu...' : 'Generate Bespoke Menu'}
                  </button>
                </div>
              )}

              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Visual Aesthetic Studio</h3>
                  <p className="text-sm text-stone-400">Upload a dish photo to edit or animate with Veo.</p>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                  <button onClick={() => fileInputRef.current?.click()} className="w-full border-2 border-dashed border-stone-700 py-8 rounded-xl hover:border-amber-600 transition-colors">
                    {selectedFile ? selectedFile.name : 'Click to upload image'}
                  </button>
                  <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Edit prompt: e.g. 'Make it look like a moody evening candlelight setting'"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl p-3 outline-none"
                  />
                  <div className="flex gap-4">
                    <button onClick={handleImageEdit} disabled={!selectedFile || isLoading} className="flex-1 bg-stone-700 hover:bg-stone-600 py-3 rounded-xl font-bold transition-all disabled:opacity-50">Edit Image</button>
                    <button onClick={handleVideoGen} disabled={!selectedFile || isLoading} className="flex-1 bg-amber-600 hover:bg-amber-500 py-3 rounded-xl font-bold transition-all disabled:opacity-50">Animate (Veo)</button>
                  </div>
                </div>
              )}

              {activeTab === 'maps' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Ingredient Sourcing</h3>
                  <p className="text-sm text-stone-400">Find the best local suppliers in London.</p>
                  <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Fresh organic Wagyu beef, truffle, or local oysters"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl p-3 outline-none"
                  />
                  <button onClick={handleMapsGen} disabled={isLoading} className="w-full bg-amber-600 hover:bg-amber-500 py-3 rounded-xl font-bold transition-all disabled:opacity-50">
                    Find Suppliers
                  </button>
                </div>
              )}
            </div>

            <div className="bg-stone-900 rounded-2xl p-6 min-h-[300px] flex flex-col items-center justify-center border border-stone-700">
              {isLoading ? (
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-stone-400 animate-pulse">Our AI Chef is preparing your request...</p>
                </div>
              ) : result ? (
                <div className="w-full h-full overflow-y-auto max-h-[400px] prose prose-invert custom-scrollbar">
                  <div className="whitespace-pre-wrap text-stone-300 leading-relaxed">
                    {result.text}
                  </div>
                  {result.sources?.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-stone-800">
                      <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Sources & Links</p>
                      {result.sources.map((s: any, i: number) => (
                        <a key={i} href={s.web?.uri || s.maps?.uri} target="_blank" className="block text-amber-500 text-sm hover:underline mb-1">
                          • {s.web?.title || s.maps?.title || 'External Resource'}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : previewUrl ? (
                previewUrl.endsWith('.mp4') || previewUrl.startsWith('blob:') ? (
                  <video src={previewUrl} controls autoPlay loop className="w-full h-full rounded-lg object-contain" />
                ) : (
                  <img src={previewUrl} alt="Preview" className="w-full h-full rounded-lg object-contain shadow-lg" />
                )
              ) : (
                <div className="text-center text-stone-600">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p>Results will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIKitchen;
