import { auth } from "@/server/actions/authAction";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <header className="absolute bg-white inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/protected/client"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Protected (client)
            </Link>
            <Link
              href="/protected/server"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Protected (server)
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
            {session ? (
              <>
                <Link
                  href="/profile/client"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Profile (client)
                </Link>
                <Link
                  href="/profile/server"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Profile (server)
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        {/* <div className="lg:hidden" role="dialog" aria-modal="true">
    
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;
