import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-green-100 pt-20">
        <h1 className="mb-10 pt-10 text-center text-green-600 text-2xl font-bold">
          Cart Items
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://voila.id/cdn/shop/files/9product-734814-DAAAI-2747-Xms-2023-09-13T2155130700_1200x1200.jpg?v=1694616949"
                className="w-full rounded-lg sm:w-40"
                alt="Product 1"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    GG Marmont Matelassé Flap Shoulder Bag Rose Pink
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    Iconic GG Marmont Matelassé Shoulder Bag from Gucci
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-green-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue={2}
                      min={1}
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-green-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">Rp.27.000.000,-</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://voila.id/cdn/shop/files/6product-8BR600ANT2F1K37-Xms-2023-05-09T1123370700_1024x1024.jpg?v=1683606279"
                className="w-full rounded-lg sm:w-40"
                alt="Product 2"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Baguette Handle Bag with Oversize Topstitching Blue
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    Stylish Baguette Bag from Fendi
                  </p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-green-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue={2}
                      min={1}
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-green-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">Rp.30.500.000,-</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 hover:bg-green-600">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
