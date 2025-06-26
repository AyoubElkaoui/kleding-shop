import { Metadata } from "next"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Elegante Marokkaanse Kaftans | Kaftan Store",
  description:
    "Ontdek onze exclusieve collectie authentieke Marokkaanse kaftans, handgemaakt door ervaren ambachtslieden. Elegantie en traditie in elke draad.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Featured Collections */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="collections-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="2" fill="currentColor" opacity="0.3"/>
                <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#collections-pattern)"/>
          </svg>
        </div>

        <div className="content-container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
              <span className="text-sm font-medium text-amber-800 tracking-wide">ONZE COLLECTIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 leading-tight">
              <span className="block">Curated</span>
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Collections
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Van traditionele Marokkaanse ontwerpen tot moderne interpretaties,
              elke collectie vertelt een uniek verhaal van vakmanschap en tijdloze elegantie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {collections.slice(0, 3).map((collection, index) => (
              <div
                key={collection.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 aspect-[4/5] mb-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Collection Image Placeholder */}
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-xl transition-transform duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-light">
                      {collection.title} Collection
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      BEKIJK COLLECTIE
                    </div>
                  </div>

                  {/* Collection Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-xs font-semibold text-gray-800 tracking-wide">
                      {index === 0 ? 'BESTSELLER' : index === 1 ? 'NIEUW' : 'PREMIUM'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Ontdek deze unieke collectie van handgemaakte kaftans,
                    waar traditie en moderniteit elkaar ontmoeten
                  </p>
                  <div className="flex items-center text-gray-900 font-medium tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                    <span className="text-sm">BEKIJK COLLECTIE</span>
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="content-container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
              <span className="text-sm font-medium text-emerald-800 tracking-wide">FEATURED PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6">
              Handpicked <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Favorites</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Onze meest geliefde stukken, geselecteerd voor hun uitzonderlijke kwaliteit en tijdloze schoonheid
            </p>
          </div>

          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50"></div>

        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
                  <span className="text-sm font-medium text-amber-800 tracking-wide">ONS VERHAAL</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 leading-tight">
                  <span className="block">Traditie ontmoet</span>
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Moderniteit
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Sinds 2010 brengen wij de rijke traditie van Marokkaanse textielkunst
                  naar Nederland. Elke kaftan in onze collectie wordt met de hand
                  vervaardigd door ervaren ambachtslieden die hun kennis van
                  generatie op generatie doorgeven.
                </p>
                <p>
                  Wij geloven in de kracht van authentieke vakmanschap en
                  duurzame mode. Door direct samen te werken met coöperaties
                  in Marokko, ondersteunen wij lokale gemeenschappen en
                  bewaren wij eeuwenoude tradities voor toekomstige generaties.
                </p>
                <p>
                  Ontdek de perfecte balans tussen traditie en moderniteit
                  in onze zorgvuldig samengestelde collectie.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-light tracking-wide hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:scale-105 rounded-xl"
                >
                  LEES ONS VERHAAL
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="/store"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 rounded-xl"
                >
                  BEKIJK COLLECTIE
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">2,500+</div>
                    <div className="text-sm text-gray-600">Tevreden klanten</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">14 jaar</div>
                    <div className="text-sm text-gray-600">Ervaring</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Handgemaakt</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-square w-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-light text-lg">
                    Ambachtsman aan het werk
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Secondary Images */}
                <div className="absolute top-8 -left-16 w-32 h-40 bg-white rounded-xl shadow-lg overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-xs text-gray-500">
                    Detail Work
                  </div>
                </div>

                <div className="absolute bottom-8 -right-16 w-28 h-36 bg-white rounded-xl shadow-lg overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-xs text-gray-500">
                    Patterns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonials-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <circle cx="75" cy="75" r="1" fill="currentColor"/>
                <path d="M37.5,37.5 L112.5,37.5 L112.5,112.5 L37.5,112.5 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-pattern)"/>
          </svg>
        </div>

        <div className="content-container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium text-white tracking-wide">KLANTERVARING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">
              Wat onze klanten <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">zeggen</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Ontdek waarom duizenden klanten vertrouwen op onze kwaliteit en service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah van der Berg",
                location: "Amsterdam",
                text: "De kwaliteit van mijn kaftan is werkelijk uitzonderlijk. Je voelt de zorg en aandacht die erin is gestoken. Een echte investering in tijdloze elegantie.",
                rating: 5,
                image: "SB"
              },
              {
                name: "Fatima El Mansouri",
                location: "Rotterdam",
                text: "Als Marokkaanse vind ik het prachtig om authentieke kaftans van zulke hoge kwaliteit in Nederland te kunnen vinden. De traditionele technieken zijn perfect bewaard gebleven.",
                rating: 5,
                image: "FE"
              },
              {
                name: "Lisa Janssen",
                location: "Utrecht",
                text: "Mijn kaftan werd binnen twee dagen geleverd en de klantenservice was uitstekend. Het past perfect en ik krijg zoveel complimenten wanneer ik het draag.",
                rating: 5,
                image: "LJ"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-200 italic mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="content-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">
              Blijf op de hoogte van onze <span className="font-light">nieuwste collecties</span>
            </h2>
            <p className="text-xl mb-12 font-light opacity-90">
              Ontvang als eerste bericht over nieuwe collecties, exclusieve aanbiedingen
              en verhalen uit onze ateliers in Marokko
            </p>

            <form className="max-w-md mx-auto flex gap-4 mb-8">
              <input
                type="email"
                placeholder="Jouw e-mailadres"
                className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-light focus:outline-none focus:ring-2 focus:ring-white/50 rounded-xl"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105 rounded-xl shadow-lg"
              >
                AANMELDEN
              </button>
            </form>

            <p className="text-sm opacity-70 font-light">
              Je kunt je op elk moment afmelden. Lees ons{" "}
              <a href="/privacy" className="underline hover:no-underline">
                privacybeleid
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}