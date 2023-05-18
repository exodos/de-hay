"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import { menuItems } from "@/helper/menu-items";
import FlayoutMenu from "./flyout";
import MyLink from "@/helper/my-link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex h-16 bg-gray-800">
      <div className="mx-auto flex w-full max-w-[95%] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            className="-m-3 p-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 text-gray-50" aria-hidden="true" />
          </button>
          <Image
            src={"/logos/mark.png"}
            alt="De-hay Technologies"
            className="h-8 w-auto"
            width={200}
            height={200}
          />
        </div>
        <nav className="hidden md:flex md:gap-x-5 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
          {menuItems.map((item, i) => {
            return <FlayoutMenu navigation={item} key={i} />;
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-50 hover:text-gray-100"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <FaUserCircle className="h-8 w-8 rounded-full bg-gray-50" />
          </a>
        </div>
      </div>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gray-700 px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <a href="#" className="-m-1.5 block p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={"/logos/de-hay.png"}
                  alt="De-hay Technologies"
                  className="h-8 w-auto"
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {menuItems.map((item, i) => {
              return (
                <MyLink href={item.url} key={i}>
                  <a
                    key={item.title}
                    className={classNames(
                      item.url == pathname
                        ? "bg-gray-800 text-gray-100"
                        : "text-gray-500 bg-gray-50",
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-300"
                    )}
                  >
                    {item.title}
                  </a>
                </MyLink>
              );
            })}
          </div>
        </Dialog.Panel>
      </Dialog> */}

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 xl:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      src={"/logos/mark.png"}
                      alt="De-hay Technologies"
                      className="h-8 w-auto"
                      width={200}
                      height={200}
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {menuItems.map((item, i) => {
                            return (
                              <MyLink href={item.url} key={i}>
                                <a
                                  key={item.title}
                                  className={classNames(
                                    item.url == pathname
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  {item.title}
                                </a>
                              </MyLink>
                            );
                          })}
                        </ul>
                      </li>
                      <li className="-mx-6 mt-auto">
                        <a
                          href="#"
                          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                        >
                          <FaUserCircle className="h-8 w-8 rounded-full bg-gray-800" />
                          <span className="sr-only">Your profile</span>
                          <span aria-hidden="true">Tom Cook</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default NavBar;
