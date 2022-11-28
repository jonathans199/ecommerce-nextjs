import React, { useRef } from 'react';
import { GrCart, GrClose } from 'react-icons/gr';
import { FaPlusCircle, FaMinusCircle, FaUserCircle } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.remove('hidden');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
      ref.current.classList.add('hidden');
    }
  };
  const ref = useRef();
  return (
    <div className="sticky top-0 z-10 bg-white ">
      <header className="body-font text-gray-600 shadow-lg shadow-gray-600/50">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <Link legacyBehavior href={'/'}>
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <Image src="/logo.png" width={48} height={48} alt="Logo" />
              <span className="ml-3 text-xl">TechWear</span>
            </a>
          </Link>
          <nav className="flex flex-wrap items-center justify-center space-x-5 text-base md:mr-auto md:ml-4 md:border-l md:border-gray-400 md:py-1 md:pl-4">
            <Link legacyBehavior href={'/tshirts'} className="mr-5">
              <a className="hover:text-gray-900">T-Shirts</a>
            </Link>
            <Link legacyBehavior href={'/hoodies'} className="mr-5">
              <a className="hover:text-gray-900">Hoodies</a>
            </Link>
            <Link legacyBehavior href={'/watches'} className="mr-5">
              <a className="hover:text-gray-900">Watches</a>
            </Link>
            <Link legacyBehavior href={'/stickers'} className="mr-5">
              <a className="hover:text-gray-900">Stickers</a>
            </Link>
          </nav>
          <div className="flex items-center">
            <Link legacyBehavior href={'/login'}>
              <button className="mr-4">
                <FaUserCircle className="text-xl" />
              </button>
            </Link>
            <button
              onClick={toggleCart}
              className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-gradient-to-r from-indigo-500 to-blue-500 py-1 px-3 text-base text-white shadow-lg shadow-indigo-600/50 focus:outline-none md:mt-0"
            >
              <GrCart className="mr-2" /> Cart
            </button>
          </div>
        </div>
      </header>
      <div
        ref={ref}
        className={`sideCart absolute top-0 right-0 hidden w-full transform bg-indigo-100 px-2 py-10 transition-transform sm:w-1/3 md:w-2/3 lg:w-2/3 xl:w-1/3 ${
          Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <h2 className="absolute top-4 left-4 text-xl font-bold">
          Shopping Cart
        </h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-4 cursor-pointer text-xl"
        >
          <GrClose />
        </span>
        <ul>
          {Object.keys(cart).length == 0 && (
            <div className="my-5">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k} className="my-5 rounded bg-white p-5">
                <div className="flex">
                  <div className="mr-3 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src="https://m.media-amazon.com/images/I/61R0oSuKMLL._AC_UX569_.jpg"
                      alt="T-shirt black"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="flex w-3/5 items-center font-semibold">
                    {cart[k].name}
                  </div>
                  <div className="flex w-1/5 items-center justify-end text-lg font-semibold">
                    <FaMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="mr-2 cursor-pointer"
                    />{' '}
                    {cart[k].qty}{' '}
                    <FaPlusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="ml-2 cursor-pointer"
                    />
                  </div>
                  <div className="flex w-1/5 items-center justify-end font-semibold">
                    ₨{cart[k].price}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end space-x-2">
          <button
            className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-gradient-to-r from-red-500 to-pink-500 py-1 px-3 text-base text-white shadow-lg shadow-red-600/50 hover:bg-indigo-700 focus:outline-none md:mt-0"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link legacyBehavior href={'/checkout'}>
            <button className="mt-4 inline-flex cursor-pointer items-center rounded border-0 bg-gradient-to-r from-indigo-500 to-blue-500 py-1 px-3 text-base text-white shadow-lg shadow-indigo-600/50 hover:bg-indigo-700 focus:outline-none md:mt-0">
              <IoBagCheckOutline className="mr-2" /> Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
