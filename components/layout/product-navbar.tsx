"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const navigation = [
  {
    name: "Smart Identity",
    href: "#",
    initial: "SI",
    current: true,
    children: [
      {
        name: "ZKBio Time API",
        href: "/product/Smart Identity/ZKBio Time API",
      },
      {
        name: "Biometrics Module SDK",
        href: "/product/Smart Identity/Biometrics Module SDK",
      },
      {
        name: "ZKBio CVSecurity API",
        href: "/product/Smart Identity/ZKBio CVSecurity API",
      },
      {
        name: "Biometrics Module",
        href: "/product/Smart Identity/Biometrics Module",
      },
      {
        name: "Biometrics Scanner",
        href: "/product/Smart Identity/Biometrics Scanner",
      },
      {
        name: "Biometrics Terminal",
        href: "/product/Smart Identity/Biometrics Terminal",
      },
      {
        name: "Multi-purpose Integration",
        href: "/product/Smart Identity/Multi-purpose Integration",
      },
    ],
  },
  {
    name: "Smart Entrance Control",
    href: "/product/Smart Entrance Control/Body Temperature Detection",
    initial: "SE",
    current: false,
    children: [
      {
        name: "Body Temperature Detection",
        href: "/product/Smart Entrance Control/Body Temperature Detection",
      },
      { name: "Access Control", href: "#" },
      { name: "Video Surveillance", href: "#" },
      { name: "Smart Security Gate", href: "#" },
      { name: "Smart Vehicle & Inspection", href: "#" },
      { name: " Security Inspection ", href: "#" },
      { name: "Smart Home Security", href: "#" },
    ],
  },
  { name: "Smart Office", href: "#", initial: "SO", current: false },
  { name: "Green Label", href: "#", initial: "GL", current: false },
  { name: "Armatura", href: "#", initial: "AR", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ProductNavBar = () => {
  return (
    <>
      <div className="mt-14 hidden pt-20 xl:fixed xl:inset-y-0 xl:z-10 xl:flex xl:w-72 xl:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) =>
                    !item.children ? (
                      <li key={item.name}>
                        <Link href={item.href} passHref legacyBehavior>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-300 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                            )}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                              {item.initial}
                            </span>
                            <span className="truncate">{item.name}</span>
                          </a>
                        </Link>
                      </li>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-gray-300 text-white"
                                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                "group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {item.initial}
                              </span>
                              <span className="truncate pl-2">{item.name}</span>
                              <svg
                                className={classNames(
                                  open
                                    ? "rotate-90 text-gray-400"
                                    : "text-gray-300",
                                  "ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <>
                                  <Link
                                    href={subItem.href}
                                    passHref
                                    legacyBehavior
                                  >
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-thin text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  </Link>
                                </>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProductNavBar;
