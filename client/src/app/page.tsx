/* eslint-disable @next/next/no-img-element */
import Card from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-green-100">
      {/* Navbar */}
      <Navbar />
      {/* Carousell */}
      <div className="carousel carousel-center rounded-box my-10 h-96 mx-14 mt-24 shadow-lg">
        <div className="carousel-item bg-cover">
          <img
            src="https://voila.id/cdn/shop/files/9product-734814-DAAAI-2747-Xms-2023-09-13T2155130700_1200x1200.jpg?v=1694616949"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://voila.id/cdn/shop/files/6product-8BR600ANT2F1K37-Xms-2023-05-09T1123370700_1024x1024.jpg?v=1683606279"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn-images.farfetch-contents.com/18/08/67/51/18086751_38336213_1000.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://voila.id/cdn/shop/files/3product-M46222-Xms-2023-08-03T1301070700_1200x1200.jpg?v=1691042476"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://voila.id/cdn/shop/files/8product-7433561VG9Y1000-Xms-2023-09-09T2118200700_1200x1200.jpg?v=1694269127"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://voila.id/cdn/shop/products/1product-M0455CTZQ_M928-Xms-2023-02-22T1522520700_1024x1024.jpg?v=1677054195"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://voila.id/cdn/shop/files/1product-A01112-Y01588-21209-Xms-2023-05-31T1557400700_1000x.jpg?v=1686199808"
            alt="Pizza"
          />
        </div>
      </div>
      <section className="container mx-auto p-10 px-0 md:p-10 md:py-10 md:px-0">
        <section className="p-5 md:p-0 xl:grid xl:grid-cols-12 xl:grid-rows-6 xl:h-200 shadow-xl">
          <section className="row-start-1 row-end-5 col-start-1 col-end-9 bg-orange-100">
            <article className="p-10 flex justify-between items-center h-full">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl max-w-md">
                  The most prestigious brand of handbag.
                </h2>
                <h3 className="text-xl">$2031.79</h3>
              </div>
              <div>
                <img
                  className="h-auto w-96"
                  src="https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-alma-bb-damier-ebene-tas-tangan--N41221_PM2_Front%20view.jpg"
                  alt=""
                />
              </div>
            </article>
          </section>
          <section className="row-start-5 row-end-7 col-start-1 col-end-4 bg-purple-300">
            <article className="flex items-center h-full bg-green-900  p-6">
              <div>
                <h2 className="uppercase text-xm font-semibold text-gray-300">
                  StyleSphere
                </h2>
                <p className=" text-3xl font-xl text-white mt-2">
                  Elevate Your Style: Discover Luxury in Every Stitch
                </p>
              </div>
            </article>
          </section>
          <section className="row-start-5 row-end-7 col-start-4 col-end-9 bg-gray-200">
            <article className="p-10 flex justify-between items-center h-full">
              <div className="space-y-5">
                <h2 className="text-3xl max-w-xs">High-Quality Branded Bags</h2>
                <h3 className="text-xl">$2100</h3>
              </div>
              <div>
                <img
                  className="h-auto w-full ml-10 -mt-5"
                  src="https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-alma-bb%E2%80%8B--M46431_PM2_Front%20view.jpg"
                  alt=""
                />
              </div>
            </article>
          </section>
          <section className="row-start-1 row-end-4 col-start-9 col-end-13 bg-teal-100">
            <article className="p-10 flex justify-between items-center h-full">
              <div className="space-y-5">
                <h2 className="text-2xl max-w-sm ">
                  Chic Choices, Timeless Elegance
                </h2>
                <h3 className="text-xl">$2250</h3>
              </div>
              <div>
                <img
                  className="h-auto w-80"
                  src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-alma-bb%E2%80%8B-monogram-canvas-handbags--M46431_PM1_Interior2%20view.jpg"
                  alt=""
                />
              </div>
            </article>
          </section>
          <section className="row-start-4 row-end-7 col-start-9 col-end-13 bg-purple-100">
            <article className="p-10 flex justify-between items-center h-full">
              <div className="space-y-5">
                <h2 className="text-2xl max-w-sm ">
                  Exquisite Styles, Unmatched Sophistication
                </h2>
                <h3 className="text-xl">$2050</h3>
              </div>
              <div>
                <img
                  className="h-auto w-96"
                  src="https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-alma-bb-epi-handbags--M22213_PM2_Front%20view.jpg"
                  alt=""
                />
              </div>
            </article>
          </section>
        </section>
      </section>

      <div className="py-10 my-10 justify-between">
        <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">
          Exclusive Series
        </h1>
        {/* Catalogue */}
        <div className="flex py-10 justify-around">
          <Card />
        </div>
        <div className="flex justify-center">
          <button className="p-2 px-6 w-52 bg-green-500 text-white rounded-md hover:bg-green-600">
            See More
          </button>
        </div>
      </div>

      {/* Service Line */}
      <div className="py-14">
        <h3 className="text-2xl tracking-widest text-green-600 text-center">
          SERVICE
        </h3>
        <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">
          Our Best &amp; Services.
        </h1>
        {/* Box */}
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* box-1 */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Communications</h1>
                <p className="mt-4 text-gray-600">
                  We offer more than just branded bags. Our shopping experience
                  includes top-notch customer service, ensuring all your
                  questions and needs are met.
                </p>
              </div>
            </div>
          </div>
          {/* box-2 */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Luxury Bag Authentic</h1>
                <p className="mt-4 text-gray-600">
                  We present authentic luxury from the most prestigious brands.
                  Discover luxury bags that reflect your personality and
                  uniqueness.
                </p>
              </div>
            </div>
          </div>
          {/* box-3 */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Happy Customers</h1>
                <p className="mt-4 text-gray-600">
                  Customer satisfaction is our top priority. With your chosen
                  branded bag, we are committed to maintaining smiles on the
                  faces of every customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
