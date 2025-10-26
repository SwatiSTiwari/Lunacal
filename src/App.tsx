import { useState } from 'react';
import { HelpCircle, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'experiences' | 'recommended'>('about');
  const [images, setImages] = useState<string[]>([
    '/Rectangle 5160.png',
    '/Rectangle 5160.png',
    '/Rectangle 5160.png'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const tabContent = {
    about: `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
    experiences: `I have extensive experience in sales and customer relationship management. Over the years, I've helped numerous clients achieve their business goals through tailored solutions and dedicated support.

My expertise includes CRM implementation, sales strategy development, and team leadership. I'm passionate about helping businesses grow and succeed.`,
    recommended: `I highly recommend exploring our latest features and tools that can help streamline your workflow. Our platform offers comprehensive solutions for businesses of all sizes.

Feel free to reach out if you'd like to learn more about how we can help your organization achieve its goals.`
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageUrl = event.target?.result as string;
          setImages([...images, imageUrl]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      if (selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      }
    } else {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      if (selectedImageIndex < images.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    } else {
      if (currentImageIndex < Math.max(0, images.length - 3)) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  const handleImageClick = (globalIndex: number) => {
    setSelectedImageIndex(globalIndex);
    setHoveredImageIndex(globalIndex);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setHoveredImageIndex(null);
  };

  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 3);

  const getModalVisibleImages = () => {
    if (selectedImageIndex === null) return [];
    if (selectedImageIndex === 0) {
      return images.slice(0, 2);
    }
    return images.slice(selectedImageIndex - 1, selectedImageIndex + 1);
  };

  const modalVisibleImages = getModalVisibleImages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#373E44] via-[#2B3238] to-[#191B1F] flex relative">
      {/* Left Half - Empty but responsive */}
      <div className="w-1/2 hidden lg:block"></div>

      {/* Right Half - Widgets */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-[720px] space-y-6">
          {/* About Me Widget */}
          <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] p-4">
            <div className="flex items-center gap-2 mb-6">
              {/* Tabs */}
              <div className="flex-1 bg-[#171717] rounded-[23px] p-1.5 flex gap-1">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`flex-1 py-3 px-6 rounded-[16px] text-base font-medium transition-all ${
                    activeTab === 'about'
                      ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.48),0px_4.22px_10.11px_0px_rgba(255,255,255,0.25)_inset]'
                      : 'text-[#A3ADB2] hover:text-white'
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={`flex-1 py-3 px-6 rounded-[16px] text-base font-medium transition-all ${
                    activeTab === 'experiences'
                      ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.48),0px_4.22px_10.11px_0px_rgba(255,255,255,0.25)_inset]'
                      : 'text-[#A3ADB2] hover:text-white'
                  }`}
                >
                  Experiences
                </button>
                <button
                  onClick={() => setActiveTab('recommended')}
                  className={`flex-1 py-3 px-6 rounded-[16px] text-base font-medium transition-all ${
                    activeTab === 'recommended'
                      ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.48),0px_4.22px_10.11px_0px_rgba(255,255,255,0.25)_inset]'
                      : 'text-[#A3ADB2] hover:text-white'
                  }`}
                >
                  Recommended
                </button>
              </div>

              <button className="w-6 h-6 bg-[#4A4E54] rounded-full flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-[#B0B0B0]" />
              </button>

              {/* Grid Icon */}
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-[#4A4E54] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#4A4E54] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#4A4E54] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#4A4E54] rounded-sm"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="overflow-y-auto max-h-[175px] pr-4 custom-scrollbar">
                <p className="text-[#969696] text-lg leading-relaxed whitespace-pre-line">
                  {tabContent[activeTab]}
                </p>
              </div>
              {/* Custom Scrollbar */}
              <div className="absolute right-0 top-0 bottom-0 w-2">
                <div className="h-full bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-lg shadow-inner"></div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#282828] to-transparent rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)]"></div>

          {/* Gallery Widget */}
          <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] p-4">
            <div className="flex items-center gap-3 mb-8">
              <button className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)]">
                <HelpCircle className="w-5 h-5 text-[#B0B0B0]" />
              </button>

              <button className="bg-[#171717] text-white py-4 px-10 rounded-[20px] text-xl font-medium shadow-[0px_4.96px_12.4px_2.48px_rgba(255,255,255,0.05)_inset,9.17px_10.16px_31.73px_0px_rgba(0,0,0,0.57)]">
                Gallery
              </button>

              <div className="flex-1"></div>

              <button
                onClick={handleAddImage}
                className="bg-[#FFFFFF08] hover:bg-[#FFFFFF15] text-white py-4 px-6 rounded-[104px] text-xs font-semibold shadow-[0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,9.17px_10.16px_40.07px_0px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all uppercase tracking-wide"
              >
                <Plus className="w-4 h-4" />
                ADD IMAGE
              </button>

              <div className="flex gap-4">
                <button
                  onClick={handlePrevImage}
                  disabled={currentImageIndex === 0}
                  className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#1f2123] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-[#6F787C]" />
                </button>
                <button
                  onClick={handleNextImage}
                  disabled={currentImageIndex >= images.length - 3}
                  className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#1f2123] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-[#6F787C]" />
                </button>
              </div>

              {/* Grid Icon */}
              <div className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)]">
                <div className="w-5 h-5 grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="flex gap-4 justify-start">
              {visibleImages.map((image, index) => {
                const globalIndex = currentImageIndex + index;
                const isHovered = hoveredImageIndex === globalIndex;
                const isFirstVisible = index === 0;

                return (
                  <div
                    key={globalIndex}
                    className="w-[190px] h-[179px] rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer"
                    style={{
                      transform: isHovered || isFirstVisible ? 'rotate(0deg) scale(1.05)' : 'rotate(-1deg)',
                      filter: isHovered || isFirstVisible ? 'grayscale(0)' : 'grayscale(1)',
                    }}
                    onMouseEnter={() => setHoveredImageIndex(globalIndex)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                    onClick={() => handleImageClick(globalIndex)}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${globalIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-[1200px] px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Gallery Widget */}
            <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] p-4">
              <div className="flex items-center gap-3 mb-8">
                <button className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)]">
                  <HelpCircle className="w-5 h-5 text-[#B0B0B0]" />
                </button>

                <button className="bg-[#171717] text-white py-4 px-10 rounded-[20px] text-xl font-medium shadow-[0px_4.96px_12.4px_2.48px_rgba(255,255,255,0.05)_inset,9.17px_10.16px_31.73px_0px_rgba(0,0,0,0.57)]">
                  Gallery
                </button>

                <div className="flex-1"></div>

                <button
                  onClick={handleAddImage}
                  className="bg-[#FFFFFF08] hover:bg-[#FFFFFF15] text-white py-4 px-6 rounded-[104px] text-xs font-semibold shadow-[0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,9.17px_10.16px_40.07px_0px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all uppercase tracking-wide"
                >
                  <Plus className="w-4 h-4" />
                  ADD IMAGE
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={handlePrevImage}
                    disabled={selectedImageIndex === 0}
                    className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#1f2123] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#6F787C]" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    disabled={selectedImageIndex >= images.length - 1}
                    className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] hover:from-[#3a3e43] hover:to-[#1f2123] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-[#6F787C]" />
                  </button>
                </div>

                {/* Grid Icon */}
                <div className="w-[45px] h-[45px] bg-gradient-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)]">
                  <div className="w-5 h-5 grid grid-cols-2 gap-1">
                    <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#6F787C] rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Modal Gallery Images - Show 2 images */}
              <div className="flex gap-6 justify-start">
                {modalVisibleImages.map((image, index) => {
                  const actualIndex = selectedImageIndex === 0 ? index : selectedImageIndex - 1 + index;
                  const isSelected = actualIndex === selectedImageIndex;

                  return (
                    <div
                      key={actualIndex}
                      className="flex-1 max-w-[550px] h-[400px] rounded-[24px] overflow-hidden transition-all duration-300"
                      style={{
                        transform: isSelected ? 'rotate(0deg) scale(1.02)' : 'rotate(0deg)',
                        filter: isSelected ? 'grayscale(0)' : 'grayscale(1)',
                      }}
                    >
                      <img
                        src={image}
                        alt={`Gallery ${actualIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
