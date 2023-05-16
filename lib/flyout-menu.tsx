import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Icon } from "./icons";
import { MyImage } from "./my-images";
import MyLink from "./my-link";
import { BiChevronRight } from "react-icons/bi";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const FlayoutMenu = ({ navigation }) => {
  let timeout;
  const timeoutDuration = 100;
  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };
  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Popover className="relative isolate z-50 shadow">
      {({ open }) => (
        <>
          <div
            onMouseEnter={() => onHover(open, "onMouseEnter")}
            onMouseLeave={() => onHover(open, "onMouseLeave")}
            className="py-5"
          >
            {/* <div className="py-5"> */}
            <div className="mx-auto max-w-full px-6 lg:px-8">
              <Popover.Button ref={buttonRef}>
                <div
                  className={classNames(
                    open ? "text-gray-100" : "text-gray-400",
                    "group inline-flex items-center gap-x-1 text-sm font-medium leading-6"
                  )}
                  onClick={() => handleClick(open)}
                >
                  <span>{navigation.title}</span>
                  {/* <FiChevronDown className="h-5 w-5 mr-5" aria-hidden="true" /> */}
                </div>
              </Popover.Button>
            </div>
            {/* </div> */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute inset-x-0 top-1 pt-14 -z-10 w-screen max-w-fit lg:-translate-x-52 xl:-translate-x-80">
                <div className="w-screen max-w-[90%] overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-full">
                  <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-x-1 sm:gap-x-1 mt-10">
                    {navigation?.subMenu?.map((subItem: any, subIndex: any) => (
                      <div
                        key={subIndex}
                        className="group relative -mx-3 flex gap-1 rounded-lg p-2S text-sm leading-6 sm:flex-col sm:p-6"
                      >
                        <div>
                          {subItem.icon ? (
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-lightBlue text-white sm:h-12 sm:w-12">
                              <Icon nameIcon={subItem.icon} />
                            </div>
                          ) : (
                            <div className="relative shrink-1">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <MyImage image={subItem.img} />
                              </div>
                            </div>
                          )}
                          <h1 className="mt-2 font-medium text-gray-900 underline underline-offset-8 text-sm py-5 hover:text-lightGreen">
                            {subItem?.title}
                          </h1>
                          <div className="pt-1 px-2">
                            <div className="grid grid-cols-1 gap-2">
                              {subItem.lastMenu ? (
                                subItem?.lastMenu.map(
                                  (item: any, index: any) => (
                                    <div key={index}>
                                      <MyLink href={item.title}>
                                        <a className="text-gray-500 block hover:text-lightGreen">
                                          {item.title}
                                          <span className="relative inset-0" />
                                        </a>
                                      </MyLink>
                                    </div>
                                  )
                                )
                              ) : (
                                <MyLink href={subItem.url}>
                                  <a className="text-gray-500 block hover:text-lightGreen">
                                    <span className="relative inset-0 inline-flex">
                                      More
                                      <BiChevronRight className="h-7 w-5 " />
                                    </span>
                                  </a>
                                </MyLink>
                              )}
                              {/* {subItem?.lastMenu &&
                                subItem?.lastMenu.map(
                                  (item: any, index: any) => (
                                    <div key={index}>
                                      <MyLink href={item.url}>
                                        <a className="text-gray-500 block hover:text-lightGreen">
                                          {item.title}
                                          <span className="relative inset-0" />
                                        </a>
                                      </MyLink>
                                    </div>
                                  )
                                )} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </>
      )}
    </Popover>
  );
};
export default FlayoutMenu;
