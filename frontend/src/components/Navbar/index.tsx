import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="flex h-16 w-full">
            <div className="w-full flex justify-center">
              <div className="hidden text-teal-900 sm:ml-6 sm:flex sm:space-x-8">
                <NavLink
                  to="/diary"
                  className={({ isActive }) =>
                    clsx(
                      "inline-flex px-20 items-center border-b-2 px-1 pt-1 text-sm font-medium lg:px-32",
                      {
                        "border-teal-900 border-b-4": isActive,
                      }
                    )
                  }
                >
                  Diary
                </NavLink>
                <NavLink
                  to="/sleep-data"
                  className={({ isActive }) =>
                    clsx(
                      "inline-flex px-20 items-center border-b-2 px-1 pt-1 text-sm font-medium lg:px-32",
                      {
                        "border-teal-900 border-b-4": isActive,
                      }
                    )
                  }
                >
                  Sleep Data
                </NavLink>
                <NavLink
                  to="/instruction"
                  className={({ isActive }) =>
                    clsx(
                      "inline-flex px-20 items-center border-b-2 px-1 pt-1 text-sm font-medium lg:px-32",
                      {
                        "border-teal-900 border-b-4": isActive,
                      }
                    )
                  }
                >
                  Instruction
                </NavLink>
              </div>
            </div>
            <Link to="settings" className="absolute left-0 p-4">
              <Cog6ToothIcon className="h-8 w-8 text-teal-950" />
            </Link>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6 text-teal-950" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as={NavLink}
                to="/diary"
                className={({ isActive }: any) =>
                  clsx("block py-2 pl-3 pr-4 text-base font-medium", {
                    "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700":
                      isActive,
                    "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700":
                      !isActive,
                  })
                }
              >
                Diary
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to="/sleep-data"
                className={({ isActive }: any) =>
                  clsx("block py-2 pl-3 pr-4 text-base font-medium", {
                    "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700":
                      isActive,
                    "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700":
                      !isActive,
                  })
                }
              >
                Sleep Data
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to="/instruction"
                className={({ isActive }: any) =>
                  clsx("block py-2 pl-3 pr-4 text-base font-medium", {
                    "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700":
                      isActive,
                    "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700":
                      !isActive,
                  })
                }
              >
                Instruction
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
