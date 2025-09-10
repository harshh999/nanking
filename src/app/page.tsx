'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const menuData = {
    "Veg. Soup": [
      { name: "Sweet Corn", price: "₹120" },
      { name: "Hot & Sour", price: "₹100" },
      { name: "Manchow", price: "₹100" },
      { name: "Lung Fung", price: "₹100" },
      { name: "Mushroom", price: "₹120" },
      { name: "Clear", price: "₹100" },
      { name: "Noodle Clear", price: "₹110" },
      { name: "Tomato", price: "₹100" },
      { name: "French Onion", price: "₹120" }
    ],
    "Starter's & Gravy's": [
      { name: "Manchurian Dry", price: "₹160" },
      { name: "Paneer Chilly", price: "₹220" },
      { name: "Paneer 65", price: "₹230" },
      { name: "Manchurian with Paneer 65", price: "₹210" },
      { name: "Mushroom Chilly", price: "₹230" },
      { name: "Comfau Manchurian", price: "₹170" },
      { name: "Manchurian Gravy", price: "₹160" },
      { name: "Schezwan Gravy", price: "₹170" },
      { name: "In Garlic Sauce", price: "₹160" },
      { name: "Paneer Chilly", price: "₹220" },
      { name: "Chaw Chaw Gravy", price: "₹170" },
      { name: "Sweet & Sour", price: "₹160" },
      { name: "Nan King Special", price: "₹230", special: true },
      { name: "Mushroom Gravy", price: "₹220" }
    ],
    "Veg. Rice": [
      { name: "Lite Fried Rice", price: "₹150" },
      { name: "Jeera Rice", price: "₹140" },
      { name: "Garlic Rice", price: "₹150" },
      { name: "Ginger Rice", price: "₹150" },
      { name: "Singapuri Rice", price: "₹170" },
      { name: "Hong Kong Rice", price: "₹170" },
      { name: "Combination Rice", price: "₹160" },
      { name: "Nan King Special Rice", price: "₹200", special: true },
      { name: "Fried Rice", price: "₹150" },
      { name: "Schezwan Rice", price: "₹160" },
      { name: "Manchurian Rice", price: "₹160" },
      { name: "Chinese Bhel", price: "₹160" },
      { name: "Singapuri Bhel", price: "₹170" },
      { name: "Rice with Gravy", price: "₹200" },
      { name: "Triple Schezwan Rice", price: "₹200" },
      { name: "Paneer Rice", price: "₹200" },
      { name: "Mushroom Rice", price: "₹200" }
    ],
    "Veg. Chowmien Noodles": [
      { name: "Manchurian Noodle", price: "₹160" },
      { name: "Chilly Garlic Noodle", price: "₹170" },
      { name: "Hakka Noodle", price: "₹150" },
      { name: "Schezwan Noodle", price: "₹160" },
      { name: "Singapuri Noodle", price: "₹170" },
      { name: "Hong Kong Noodle", price: "₹170" },
      { name: "Mushroom Noodle", price: "₹200" },
      { name: "Paneer Noodle", price: "₹200" },
      { name: "Crispy Noodle", price: "₹200" },
      { name: "Chow Min Gravy", price: "₹180" },
      { name: "American Chopsee", price: "₹170" },
      { name: "Chinese Chopsee", price: "₹170" },
      { name: "Spring Roll", price: "₹200" }
    ],
    "Other Items": [
      { name: "Salad", price: "₹20" },
      { name: "Fried Noodles", price: "₹20" },
      { name: "Manchurian", price: "₹50" }
    ]
  }

  const categories = Object.keys(menuData)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const category of categories) {
        const section = sectionRefs.current[category]
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories])

  const scrollToCategory = (category: string) => {
    const section = sectionRefs.current[category]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveCategory(category)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Banner Section */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/restaurant-banner.jpg"
          alt="Nan King Chinese Restaurant - Authentic Chinese Dining Experience"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <div className="mb-8 animate-pulse">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-full flex items-center justify-center border-4 border-white/90 shadow-2xl backdrop-blur-sm ring-4 ring-red-500/30">
              <div className="text-white text-4xl md:text-6xl font-bold tracking-wider">南</div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-4 drop-shadow-2xl text-white tracking-wider">
            Nan King
          </h1>
          <div className="text-center mb-6">
            <p className="text-2xl md:text-4xl drop-shadow-lg font-light tracking-wide text-white/95 bg-black/30 px-8 py-3 rounded-xl backdrop-blur-sm border border-white/20">
              Authentic Chinese Food
            </p>
            <p className="text-lg md:text-xl mt-3 text-white/90 font-light tracking-wide">
              Traditional Flavors • Modern Experience
            </p>
          </div>
        </div>
        
        {/* View Location Button */}
        <div className="absolute top-4 right-4 z-30">
          <a
            href="https://maps.app.goo.gl/tgCQ8tjWmtxYUraw7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-red-700 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">View Location</span>
          </a>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-3 md:gap-4 overflow-x-auto py-5 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-6 py-3 rounded-xl whitespace-nowrap text-sm md:text-base font-semibold transition-all duration-300 flex-shrink-0 shadow-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-red-600 hover:shadow-md'
                }`}
              >
                {category.replace('Veg. ', '').replace("'s & Gravy's", "'s & Gravies")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {Object.entries(menuData).map(([category, items]) => (
          <div 
            key={category} 
            ref={(el) => { sectionRefs.current[category] = el }}
            className="mb-16 scroll-mt-20"
          >
            {/* Section Header */}
            <div className="mb-10 text-center">
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full mb-4 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                  {category}
                </h2>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full shadow-sm"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-red-200 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {item.special && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10 animate-pulse">
                      ⭐ Special
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-gray-900 font-semibold text-lg mb-4 group-hover:text-red-600 transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-bold text-2xl">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note Section */}
        <div className="bg-gradient-to-r from-amber-50 via-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 to-red-500"></div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-red-700 font-bold text-xl">Special Offer</h3>
            </div>
            <p className="text-red-700 font-semibold text-lg">
              ₹30 less for half plate on all items
            </p>
          </div>
        </div>

        {/* Restaurant Timings */}
        <div className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 rounded-2xl p-10 mb-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Open Hours</h3>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-light tracking-wide">
                🌅 Lunch: 11:30 AM – 2:00 PM
              </p>
              <p className="text-xl font-light tracking-wide">
                🌙 Dinner: 6:00 PM – 11:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-2 text-lg font-light">
            Made with ❤️ by Lazlle Studio
          </p>
          <a 
            href="https://www.lazlle.studio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 underline text-base"
          >
            www.lazlle.studio
          </a>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919537214191"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none ring-4 ring-green-500/30"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
        </svg>
      </a>
    </div>
  )
}