import { Text } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
                                               product,
                                               isFeatured,
                                               region,
                                             }: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  const isNew = product.created_at &&
    new Date(product.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <div
        data-testid="product-wrapper"
        className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      >
        {/* Product Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-[3/4]">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Quick Action Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-medium text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg">
              BEKIJK DETAILS
            </div>
          </div>

          {/* Product Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {isFeatured && (
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold tracking-wide rounded-full shadow-lg">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                FEATURED
              </span>
            )}
            {isNew && (
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold tracking-wide rounded-full shadow-lg animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                NIEUW
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg z-10">
            <svg className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Text className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                {product.collection?.title || 'Kaftan Collection'}
              </Text>

              {/* Quick Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < 4 ? 'text-amber-400' : 'text-gray-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <Text
              className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200 leading-tight line-clamp-2"
              data-testid="product-title"
            >
              {product.title}
            </Text>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-emerald-600 font-medium">Op voorraad</span>
            </div>
          </div>

          {/* Available Colors/Variants */}
          {product.variants && product.variants.length > 1 && (
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Kleuren:</span>
                <div className="flex gap-1">
                  {product.variants.slice(0, 4).map((variant, index) => (
                    <div
                      key={variant.id}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-125 transition-transform cursor-pointer"
                      style={{
                        backgroundColor: variant.metadata?.color as string || '#f5f5f5'
                      }}
                      title={variant.title}
                    />
                  ))}
                  {product.variants.length > 4 && (
                    <div className="w-4 h-4 rounded-full bg-gray-100 border-2 border-white shadow-sm ring-1 ring-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-medium">+{product.variants.length - 4}</span>
                    </div>
                  )}
                </div>
              </div>

              <span className="text-xs text-gray-400">
                {product.variants.length} opties
              </span>
            </div>
          )}

          {/* Quick Add to Cart Button */}
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-600 hover:to-orange-600 text-white py-3 px-4 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              TOEVOEGEN AAN WINKELWAGEN
            </button>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-amber-200 transition-all duration-300 pointer-events-none"></div>
      </div>
    </LocalizedClientLink>
  )
}