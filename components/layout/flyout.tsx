import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { Icon } from "@/helper/icons";
import { MyImage } from "@/helper/my-images";
import MyLink from "@/helper/my-link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const FlayoutMenu = ({ navigation }) => {
  let timeout;
  const timeoutDuration = 100;
  const buttonRef: any = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open: any) => {
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
    <Popover className="static">
      {({ open }) => (
        <>
          <div
            onMouseEnter={() => onHover(open, "onMouseEnter")}
            onMouseLeave={() => onHover(open, "onMouseLeave")}
            className="py-5"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Popover.Button ref={buttonRef}>
                <div
                  className={classNames(
                    open ? "text-white" : "text-gray-200",
                    "inline-flex items-center gap-x-1 text-sm font-medium leading-6"
                  )}
                  onClick={() => handleClick(open)}
                >
                  <span>{navigation.title}</span>
                </div>
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute left-0 top-10 z-10 mt-5 flex w-screen max-w-fit px-2">
                <div className="w-screen max-w-max flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-full">
                  <div className="mt-10 grid grid-cols-2 sm:gap-x-1 lg:grid-cols-4 lg:gap-x-3">
                    {navigation?.subMenu?.map((subItem: any, subIndex: any) => (
                      <div
                        key={subIndex}
                        className="p-2S group relative -m-3 flex gap-1 rounded-lg text-sm leading-6 sm:flex-col sm:p-6"
                      >
                        <div>
                          {subItem.icon ? (
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white group-hover:text-indigo-600">
                              <Icon nameIcon={subItem.icon} />
                            </div>
                          ) : (
                            <div className="relative flex-none">
                              <MyImage image={subItem.img} />
                            </div>
                          )}
                          <h1 className="py-5 text-sm font-semibold text-gray-900 underline underline-offset-8 hover:text-lightGreen">
                            {subItem?.title}
                          </h1>
                          <div className="px-2 pt-1">
                            <div className="grid grid-cols-1 gap-2">
                              {!subItem?.lastMenu ? (
                                <MyLink href={subItem.url}>
                                  <a className="block text-gray-500 hover:text-lightGreen">
                                    <span className="relative inset-0 inline-flex">
                                      More
                                      <BiChevronRight className="h-7 w-5 " />
                                    </span>
                                  </a>
                                </MyLink>
                              ) : (
                                subItem?.lastMenu
                                  ?.slice(0, 4)
                                  ?.map((lastItem: any, lastIndex: any) => (
                                    <div key={lastIndex}>
                                      <MyLink href={lastItem.url}>
                                        <a className="block font-normal text-gray-800 hover:text-lightGreen">
                                          {lastItem.title}
                                          <span className="relative inset-0" />
                                        </a>
                                      </MyLink>
                                    </div>
                                  ))
                              )}
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
