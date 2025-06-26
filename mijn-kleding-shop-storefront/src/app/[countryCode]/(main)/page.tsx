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
      <section className="py-20 bg-white">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
              Onze Collecties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Van traditionele Marokkaanse ontwerpen tot moderne interpretaties,
              elke collectie vertelt een uniek verhaal van vakmanschap en elegantie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 3).map((collection, index) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-4 relative">
                  {/* Replace with actual collection images */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-stone-200 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-light text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 font-light">
                    Ontdek deze unieke collectie van handgemaakte kaftans
                  </p>
                  <span className="text-sm text-black font-light tracking-wide hover:text-gray-600 transition-colors">
                    BEKIJK COLLECTIE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
                Ons Verhaal
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
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
                  bewaren wij eeuwenoude tradities.
                </p>
                <p>
                  Ontdek de perfecte balans tussen traditie en moderniteit
                  in onze zorgvuldig samengestelde collectie.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex items-center text-black font-light tracking-wide hover:text-gray-600 transition-colors"
                >
                  Lees ons volledige verhaal
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square w-full bg-gradient-to-b from-amber-100 to-stone-200">
                {/* Replace with actual craftsman image */}
                <div className="w-full h-full bg-gradient-to-b from-amber-100 to-stone-200 flex items-center justify-center">
                  <span className="text-gray-400">Ambachtsman aan het werk</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-stone-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
              Wat onze klanten zeggen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah van der Berg",
                location: "Amsterdam",
                text: "De kwaliteit van mijn kaftan is werkelijk uitzonderlijk. Je voelt de zorg en aandacht die erin is gestoken. Een echte investering in tijdloze elegantie.",
                rating: 5
              },
              {
                name: "Fatima El Mansouri",
                location: "Rotterdam",
                text: "Als Marokkaanse vind ik het prachtig om authentieke kaftans van zulke hoge kwaliteit in Nederland te kunnen vinden. De traditionele technieken zijn perfect bewaard gebleven.",
                rating: 5
              },
              {
                name: "Lisa Janssen",
                location: "Utrecht",
                text: "Mijn kaftan werd binnen twee dagen geleverd en de klantenservice was uitstekend. Het past perfect en ik krijg zoveel complimenten wanneer ik het draag.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-medium text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-light">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Ontvang als eerste bericht over nieuwe collecties, exclusieve aanbiedingen
            en verhalen uit onze ateliers in Marokko
          </p>

          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Jouw e-mailadres"
              className="flex-1 px-4 py-3 bg-white text-black font-light focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-light tracking-wide hover:bg-gray-100 transition-colors"
            >
              AANMELDEN
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 font-light">
            Je kunt je op elk moment afmelden. Lees ons privacybeleid.
          </p>
        </div>
      </section>
    </>
  )
}