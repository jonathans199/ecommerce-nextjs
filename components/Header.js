import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <div className="md:w-100 sm:w-100">
        <img className="md-w-100 sm:w-100" src="/Header_img.jpg" />
      </div>

      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-10">
          <div className="mb-20 flex w-full flex-wrap">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                Popular Products
              </h1>
              <div className="h-1 w-20 rounded bg-gradient-to-r from-indigo-500 to-blue-500"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Exclusively selected our best products which are selling online
              from our top ecommerce store, Live to wear these cool awesome
              products.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="h-full rounded-lg bg-gray-100 p-6">
                <div className="mb-2 rounded-lg bg-white p-2">
                  <Image
                    className="mb-6 h-40 w-full rounded object-contain object-center"
                    src="/tshirt.jpg"
                    width={720}
                    height={400}
                    alt="content"
                  />
                </div>

                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  T-SHIRTS
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Gildan Men&apos;s Ultra Cotton T-Shirt
                </h2>
                <p className="text-base leading-relaxed">
                  100% cotton, this classic fit preshrunk jersey knit provides
                  unmatched comfort with each wear.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="h-full rounded-lg bg-gray-100 p-6">
                <div className="mb-2 rounded-lg bg-white p-2">
                  <Image
                    className="mb-6 h-40 w-full rounded object-contain object-center"
                    src="/hoodies.jpg"
                    width={721}
                    height={401}
                    alt="content"
                  />
                </div>

                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  HOODIES
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Gildan Adult Fleece Hoodie
                </h2>
                <p className="text-base leading-relaxed">
                  Equal parts durable, comfortable and stylish, the Gildan Adult
                  Fleece Hooded Sweatshirt belongs in every collection.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="h-full rounded-lg bg-gray-100 p-6">
                <div className="mb-2 rounded-lg bg-white p-2">
                  <Image
                    className="mb-6 h-40 w-full rounded object-contain object-center"
                    src="/watches.jpg"
                    width={722}
                    height={402}
                    alt="content"
                  />
                </div>

                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  WATCHES
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Fossil Men&apos;s Quartz Chronograph Watch
                </h2>
                <p className="text-base leading-relaxed">
                  Military-inspired design with oversized lugs and bold details
                  offers a laid-back yet rugged feel that is perfect for any
                  adventure, day or night.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/4">
              <div className="h-full rounded-lg bg-gray-100 p-6">
                <div className="mb-2 rounded-lg bg-white p-2">
                  <Image
                    className="mb-6 h-40 w-full rounded object-contain object-center"
                    src="/stickers.jpg"
                    width={723}
                    height={403}
                    alt="content"
                  />
                </div>

                <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                  STICKERS
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  Goku and Vegeta Sticker
                </h2>
                <p className="text-base leading-relaxed">
                  High quality decal die-cut laptop sticker in black color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn&apos;t care if you live or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
