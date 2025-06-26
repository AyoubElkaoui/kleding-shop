import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-neutral-50 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Replace with your actual kaftan hero image */}
          <div className="w-full h-full bg-gradient-to-br from-amber-50 via-neutral-100 to-stone-100"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
              Elegantie
              <span className="block font-extralight text-3xl md:text-5xl lg:text-6xl mt-2 text-gray-700">
                in elke draad
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light text-gray-600 mb-8 leading-relaxed max-w-lg">
              Ontdek onze collectie van authentieke Marokkaanse kaftans,
              met de hand vervaardigd door ervaren ambachtslieden
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
              >
                Bekijk Collectie
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                Ons Verhaal
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto bg-gradient-to-b from-amber-100 to-stone-200 rounded-sm shadow-2xl">
              {/* Replace with actual product image */}
              <div className="w-full h-full rounded-sm bg-gradient-to-b from-amber-100 to-stone-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Kaftan Product Image</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-stone-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-gray-400"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-black mb-2">Handgemaakt</h3>
              <p className="text-xs text-gray-600 max-w-xs">
                Elke kaftan wordt met zorg vervaardigd door ervaren ambachtslieden
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-black mb-2">Snelle Levering</h3>
              <p className="text-xs text-gray-600 max-w-xs">
                Gratis verzending in Nederland. Besteld voor 16:00, volgende dag in huis
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-black mb-2">Kwaliteitsgarantie</h3>
              <p className="text-xs text-gray-600 max-w-xs">
                30 dagen retourrecht en 2 jaar garantie op alle producten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero