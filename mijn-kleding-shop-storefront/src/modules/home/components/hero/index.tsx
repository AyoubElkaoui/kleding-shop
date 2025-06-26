import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-neutral-100 flex items-center overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor"/>
              <path d="M25,25 L75,25 L75,75 L25,75 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Hero Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">Nieuw: Zomer Collectie 2024</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 leading-none">
                <span className="block mb-2">Tijdloze</span>
                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent font-light">
                  Elegantie
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-600 font-extralight">
                  Authentieke Marokkaanse Kaftans
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-xl">
                Ontdek onze exclusieve collectie van handgemaakte kaftans,
                waar traditie en moderne elegantie samenkomen in perfecte harmonie.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <LocalizedClientLink
                href="/store"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-light tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">ONTDEK COLLECTIE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-light tracking-wide transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <span>ONS VERHAAL</span>
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </LocalizedClientLink>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">2.500+</span> tevreden klanten
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  <span className="font-medium">4.9/5</span> (327 reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-4 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400 font-light">Hero Kaftan Image</span>
                </div>

                {/* Product Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-medium text-gray-800">NIEUW</span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-medium">vanaf €149</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Secondary Images */}
              <div className="absolute top-12 -right-16 w-32 h-40 bg-white rounded-xl shadow-lg overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Detail</span>
                </div>
              </div>

              <div className="absolute bottom-12 -left-16 w-28 h-36 bg-white rounded-xl shadow-lg overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Style</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-500 font-light">Scroll om meer te ontdekken</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 py-6 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">Handgemaakt</h3>
                <p className="text-xs text-gray-600">Authentieke vakmanschap</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">Snelle Levering</h3>
                <p className="text-xs text-gray-600">Gratis verzending NL</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">Kwaliteitsgarantie</h3>
                <p className="text-xs text-gray-600">30 dagen retourrecht</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero