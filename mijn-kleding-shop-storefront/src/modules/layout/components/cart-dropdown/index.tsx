"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

const CartDropdown = ({
                        cart: cartState,
                      }: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()
    const timer = setTimeout(close, 5000)
    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }
    open()
  }

  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-50"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <PopoverButton className="h-full">
          <LocalizedClientLink
            className="group relative p-2 text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-x-2"
            href="/cart"
            data-testid="nav-cart-link"
          >
            <div className="relative">
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L7 13m0 0L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-gray-100 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
          </LocalizedClientLink>
        </PopoverButton>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-4 scale-95"
        >
          <PopoverPanel
            static
            className="hidden small:block absolute top-[calc(100%+12px)] right-0 bg-white border border-gray-100/50 w-[440px] text-gray-900 shadow-2xl rounded-2xl backdrop-blur-md overflow-hidden"
            data-testid="nav-cart-dropdown"
          >
            <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-gray-900">
                  Winkelwagen ({totalItems})
                </h3>
              </div>
              {totalItems > 0 && (
                <div className="text-sm text-gray-500">
                  {totalItems} item{totalItems !== 1 ? 's' : ''}
                </div>
              )}
            </div>

            {cartState && cartState.items?.length ? (
              <>
                <div className="max-h-[400px] overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
                  {cartState.items
                    .sort((a, b) => {
                      return (a.created_at ?? "") > (b.created_at ?? "")
                        ? -1
                        : 1
                    })
                    .map((item) => (
                      <div
                        className="group flex gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/products/${item.product_handle}`}
                          className="relative w-20 h-20 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <Thumbnail
                            thumbnail={item.thumbnail}
                            images={item.variant?.product?.images}
                            size="square"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </LocalizedClientLink>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="min-w-0 flex-1 mr-3">
                              <h3 className="text-sm font-medium text-gray-900 truncate">
                                <LocalizedClientLink
                                  href={`/products/${item.product_handle}`}
                                  data-testid="product-link"
                                  className="hover:text-amber-600 transition-colors"
                                >
                                  {item.title}
                                </LocalizedClientLink>
                              </h3>
                              <LineItemOptions
                                variant={item.variant}
                                data-testid="cart-item-variant"
                                data-value={item.variant}
                              />
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500">Aantal:</span>
                                <span
                                  className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full"
                                  data-testid="cart-item-quantity"
                                  data-value={item.quantity}
                                >
                                  {item.quantity}
                                </span>
                              </div>
                            </div>

                            <div className="text-right">
                              <LineItemPrice
                                item={item}
                                style="tight"
                                currencyCode={cartState.currency_code}
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <DeleteButton
                              id={item.id}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              data-testid="cart-item-remove-button"
                            >
                              <span className="text-xs font-medium">Verwijderen</span>
                            </DeleteButton>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">
                      Subtotaal
                    </span>
                    <span
                      className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 mb-4 text-center">
                    Verzendkosten worden berekend bij het afrekenen
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <LocalizedClientLink href="/cart" passHref>
                      <Button
                        className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all font-medium tracking-wide"
                        variant="secondary"
                        size="large"
                        data-testid="view-cart-button"
                      >
                        BEKIJK WINKELWAGEN
                      </Button>
                    </LocalizedClientLink>

                    <LocalizedClientLink href="/checkout" passHref>
                      <Button
                        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-600 hover:to-orange-600 text-white transition-all font-medium tracking-wide shadow-lg hover:shadow-xl"
                        size="large"
                        data-testid="go-to-checkout-button"
                      >
                        AFREKENEN
                      </Button>
                    </LocalizedClientLink>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Je winkelwagen is leeg</h3>
                    <p className="text-sm text-gray-500">Ontdek onze prachtige collectie kaftans</p>
                  </div>
                  <LocalizedClientLink href="/store">
                    <Button
                      onClick={close}
                      className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-600 hover:to-orange-600 text-white transition-all font-medium tracking-wide shadow-lg hover:shadow-xl"
                    >
                      ONTDEK PRODUCTEN
                    </Button>
                  </LocalizedClientLink>
                </div>
              </div>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown