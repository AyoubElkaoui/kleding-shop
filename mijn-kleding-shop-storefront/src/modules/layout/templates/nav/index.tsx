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
      <header className="relative h-20 mx-auto bg-white border-b border-gray-100 transition-colors duration-200">
        <nav className="content-container flex items-center justify-between w-full h-full">

          {/* Mobile Menu */}
          <div className="flex-1 basis-0 h-full flex items-center md:hidden">
            <SideMenu regions={regions} />
          </div>

          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-x-8">
            <LocalizedClientLink
              href="/store"
              className="text-sm font-light text-gray-700 hover:text-black transition-colors tracking-wide"
            >
              Collectie
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/kaftans"
              className="text-sm font-light text-gray-700 hover:text-black transition-colors tracking-wide"
            >
              Kaftans
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections/accessoires"
              className="text-sm font-light text-gray-700 hover:text-black transition-colors tracking-wide"
            >
              Accessoires
            </LocalizedClientLink>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-light tracking-[0.1em] text-black hover:text-gray-700 transition-colors"
              data-testid="nav-store-link"
            >
              KAFTAN STORE
            </LocalizedClientLink>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-x-8">
            <LocalizedClientLink
              href="/about"
              className="text-sm font-light text-gray-700 hover:text-black transition-colors tracking-wide"
            >
              Over Ons
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="text-sm font-light text-gray-700 hover:text-black transition-colors tracking-wide"
            >
              Contact
            </LocalizedClientLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            {/* Search Icon */}
            <button className="hidden md:block text-gray-700 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account */}
            <LocalizedClientLink
              className="hidden md:block text-gray-700 hover:text-black transition-colors"
              href="/account"
              data-testid="nav-account-link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </LocalizedClientLink>

            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-gray-700 hover:text-black transition-colors flex items-center gap-x-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <span className="text-sm font-light">(0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}