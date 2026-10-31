
import React, { useState, useEffect } from 'react';
import { KENYAN_DISHES, WHATSAPP_LINK, WHATSAPP_NUMBER } from './constants';
import DishCard from './components/DishCard';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-stone-900' : 'text-white'}`}>SAVANNA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className={`text-sm font-medium hover:text-orange-600 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}>Menu</a>
            <a href="#about" className={`text-sm font-medium hover:text-orange-600 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}>Heritage</a>
            <a href={WHATSAPP_LINK} target="_blank" className="px-5 py-2 bg-green-600 text-white rounded-full text-sm font-bold hover:bg-green-700 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order Now
            </a>
          </div>
          
          <div className="md:hidden">
            <a href={WHATSAPP_LINK} className="p-2 text-green-600">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/kenyafood/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display text-white mb-6 leading-tight">
            Tastes of the <span className="text-orange-500 italic">Savanna</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto">
            Experience authentic Kenyan hospitality through every plate. From the rift valley to the coast, we bring the best of Kenya to your table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="px-10 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20">
              View Our Menu
            </a>
            <a href={WHATSAPP_LINK} className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              WhatsApp Us: {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-stone-900 mb-4">Our Signature Dishes</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-500 max-w-xl mx-auto">
              Carefully curated traditional favorites using fresh local ingredients sourced directly from Kenyan farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KENYAN_DISHES.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/kitchen/400/500" alt="Kitchen" className="rounded-2xl h-80 w-full object-cover mt-8" />
              <img src="https://picsum.photos/seed/spices/400/500" alt="Spices" className="rounded-2xl h-80 w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600 rounded-2xl flex items-center justify-center p-8 text-center shadow-2xl">
              <span className="text-2xl font-display leading-tight italic">Born in the Heart of Nairobi</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Our Heritage</h3>
            <h2 className="text-4xl md:text-5xl font-display mb-8">More Than Just Food, It's a Connection</h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              At Savanna Flavors, we believe that Kenyan cuisine is a vibrant tapestry of cultures—from the aromatic Swahili spices of the coast to the hearty roasts of the central highlands. 
            </p>
            <p className="text-stone-400 text-lg mb-10 leading-relaxed">
              Every dish is prepared with "Karibu" (Welcome) in heart. We source our Tilapia fresh from the lake and our organic vegetables from local vendors, ensuring that we support the community that feeds us.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center border-t border-stone-800 pt-10">
              <div>
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-stone-500 mt-1 uppercase tracking-tighter">Organic</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">20+</div>
                <div className="text-sm text-stone-500 mt-1 uppercase tracking-tighter">Local Farms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">15yrs</div>
                <div className="text-sm text-stone-500 mt-1 uppercase tracking-tighter">Tradition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Hungry for the real thing?</h2>
          <p className="text-xl text-orange-100 mb-10">
            We deliver across the city or you can book a table for the full Kenyan experience.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-4 px-12 py-5 bg-white text-orange-600 rounded-full font-bold text-xl hover:bg-stone-100 transition-all shadow-xl group"
          >
            <svg className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Text us: {WHATSAPP_NUMBER}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-stone-500 text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
            <span className="text-white font-bold tracking-tighter">SAVANNA FLAVORS</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <p>© 2024 Savanna Flavors Ltd. Authentic Kenyan Cuisine.</p>
        </div>
      </footer>

      {/* Persistent WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group flex items-center gap-2"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default App;
