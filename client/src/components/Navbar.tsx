export function Navbar() {
  return (
    <div className="fixed grid w-full place-items-center rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
        <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <a
              href="#"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
            >
              <img
                src="/logo.png"
                alt="StyleSphere Logo"
                width={100}
                height={24}
              />
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a
                      href="#"
                      className="items-center hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 text-green-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    >
                      Our Best Products
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a
                      href="#"
                      className="items-center hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    >
                      <img
                        src="/cart-black.png"
                        alt="StyleSphere Logo"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                  <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <a
                      href="#"
                      className="flex items-center hidden px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    >
                      <img
                        src="/icon-black.png"
                        alt="StyleSphere Logo"
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button"
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
