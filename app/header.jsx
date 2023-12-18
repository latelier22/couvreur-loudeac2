"use client";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
  <header>
    <nav
      className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
      data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="flex items-center">
          
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation">
            
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>
        </div>
  
        
        <div
          className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item>
          <ul
            className="mr-auto flex flex-col lg:flex-row"
            data-te-navbar-nav-ref>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Home</a
              >
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Features</a
              >
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Pricing</a
              >
            </li>
            <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    
    <div
      className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
      <h1 className="mb-6 text-5xl font-bold">PRO COUVREUR ET NETTOYAGE</h1>
      <h3 className="mb-8 text-3xl font-bold">Loudéac et ses alentours</h3>
      <a
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        href="#!"
        role="button"
        >Me contacter</a
      >
    </div>
    <div>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
      </div>
    </div>
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
    </div>
  </div>
</div>
    </div>
  </header>
  );
};

export default Header;