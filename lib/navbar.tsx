"use client";
import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaUserCircle, FaUserTie } from "react-icons/fa";

import { useRouter } from "next/router";
import FlayoutMenu from "./flyout-menu";
import { menuItems } from "@/helper/menu-items";
import MyLink from "@/helper/my-link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  children: ReactNode;
};

const NavBar = ({ children }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 bg-gray-800">
        <div className="mx-auto flex w-full max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
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
              src={"/logos/de-hay.png"}
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
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
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
        </Dialog>
      </header>
      <main>
        <div className="space-y-16 py-16 xl:space-y-20 pt-24">
          <div>
            <div className="mx-auto max-w-full">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NavBar;
