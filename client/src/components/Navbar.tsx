"use client";

export function Navbar() {
  return (
    <div className="grid w-full place-items-center rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
        <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-[#12784A] border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex flex-grow items-center align-middle justify-between text-white">
            <a
              href="#"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
            >
              StyleSphere
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  <button
                    className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                  >
                    <img
                      src="/cart.png"
                      alt="My Cart Icon"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button
                    className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                  >
                    <img
                      src="/icon.png"
                      alt="My SVG Icon"
                      width={25}
                      height={25}
                    />
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
