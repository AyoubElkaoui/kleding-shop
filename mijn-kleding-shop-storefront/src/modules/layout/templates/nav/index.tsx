import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto bg-white/95 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
        <nav className="content-container flex items-center justify-between w-full h-full">

          {/* Mobile Menu */}
          <div className="flex-1 basis-0 h-full flex items-center md:hidden">
            <SideMenu regions={regions} />
          </div>

          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-x-8">
            <LocalizedClientLink
              href="/store"
              className="group relative text-sm font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wide py-2"
            >
              Collectie
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/kaftans"
              className="group relative text-sm font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wide py-2"
            >
              Kaftans
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/accessoires"
              className="group relative text-sm font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wide py-2"
            >
              Accessoires
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </LocalizedClientLink>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
              data-testid="nav-store-link"
            >
              <span className="text-2xl font-extralight tracking-[0.15em] text-gray-900 leading-none">
                KAFTAN
              </span>
              <span className="text-xs font-light tracking-[0.3em] text-gray-600 -mt-1">
                STORE
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </LocalizedClientLink>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-x-8">
            <LocalizedClientLink
              href="/about"
              className="group relative text-sm font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wide py-2"
            >
              Over Ons
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="group relative text-sm font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wide py-2"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </LocalizedClientLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            {/* Search Icon */}
            <button className="hidden md:block group relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gray-100 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
            </button>

            {/* Account */}
            <LocalizedClientLink
              className="hidden md:block group relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
              href="/account"
              data-testid="nav-account-link"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gray-100 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
            </LocalizedClientLink>

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="group relative p-2 text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-x-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <div className="relative">
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gray-100 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>

        {/* Progress bar for scroll */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-0 transition-all duration-300"></div>
        </div>
      </header>
    </div>
  )
}