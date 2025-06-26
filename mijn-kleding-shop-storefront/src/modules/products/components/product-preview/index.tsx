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

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="bg-white">
        {/* Product Image */}
        <div className="relative mb-4 overflow-hidden bg-neutral-50">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white text-black px-6 py-2 text-sm font-light tracking-wide hover:bg-neutral-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              BEKIJK PRODUCT
            </div>
          </div>

          {/* Product Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isFeatured && (
              <span className="px-2 py-1 bg-black text-white text-xs font-light tracking-wide">
                FEATURED
              </span>
            )}
            {product.created_at &&
              new Date(product.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && (
                <span className="px-2 py-1 bg-neutral-100 text-black text-xs font-light tracking-wide">
                NIEUW
              </span>
              )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div>
            <Text className="text-xs text-gray-500 uppercase tracking-wide font-light">
              {product.collection?.title || 'Kaftan'}
            </Text>
            <Text
              className="text-base font-light text-black group-hover:text-gray-700 transition-colors duration-200 leading-tight"
              data-testid="product-title"
            >
              {product.title}
            </Text>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            {cheapestPrice && (
              <div className="flex items-center gap-x-2">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}

            {/* Rating placeholder */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < 4 ? 'text-gray-400' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Available Colors/Variants */}
          {product.variants && product.variants.length > 1 && (
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-gray-500 font-light">
                {product.variants.length} kleuren
              </span>
              <div className="flex gap-1">
                {product.variants.slice(0, 4).map((variant, index) => (
                  <div
                    key={variant.id}
                    className="w-3 h-3 rounded-full border border-gray-200"
                    style={{
                      backgroundColor: variant.metadata?.color as string || '#f5f5f5'
                    }}
                  />
                ))}
                {product.variants.length > 4 && (
                  <span className="text-xs text-gray-400 font-light">
                    +{product.variants.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}