"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "chart.js/auto";
import { ReactNode, useState, useEffect } from "react";
// import "chartjs-adapter-date-fns";

// import { useAccount } from "wagmi";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useChain, useWallet } from "@cosmos-kit/react";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  {
    name: "My Assets",
    href: "/myassets",
    icon: RocketLaunchIcon,
    current: false,
  },
  {
    name: "Borrow Assets",
    href: "/listings",
    icon: RocketLaunchIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  children?: ReactNode;
  pageTitle?: string;
}

export default function Layout({
  children,
  pageTitle = "Untitled Page",
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { status, mainWallet } = useWallet("keplr-extension");
  const { connect, disconnect } = useChain("cosmoshub");

  // useEffect(() => {
  //   connect();
  // }, []);

  return (
    <>
      <Head>
        <title>{pageTitle + " | lenft"}</title>
      </Head>
      <div>
        <div
          className="min-h-full"
          style={{
            backgroundImage:
              "linear-gradient(60deg, rgba(247,186,147,1) 0%, rgba(254,151,213,1) 100%)",
          }}
        >
          <div className="pb-32">
            <Disclosure as="nav" className="">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="">
                      <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex-shrink-0 flex items-center justify-between">
                            <Link href={"/"}>
                              <img src="./logo.png" width={"130px"} />
                            </Link>
                          </div>
                          <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline text-6xl space-x-4">
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  style={{
                                    backgroundImage:
                                      pathname == item.href
                                        ? "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)"
                                        : "",
                                  }}
                                  className={classNames(
                                    pathname === item.href
                                      ? "bg-yellow-500 text-white"
                                      : "text-white-500",
                                    "rounded-md px-3 py-2 text-sm font-medium"
                                  )}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div
                            onClick={() => {
                              connect();
                            }}
                          >
                            <Link
                              href={""}
                              style={{
                                backgroundImage:
                                  "linear-gradient(120deg, rgba(66,31,52,1) 0%, rgba(66,31,52,1) 100%)",
                              }}
                              className="bg-yellow-500 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                              Connect Wallet
                            </Link>
                          </div>

                          {/* <div
                            onClick={() => {
                              disconnect();
                            }}
                          >
                            <Link href={""}>Connected</Link>
                          </div> */}
                        </div>

                        <div>{/* <ConnectButton /> */}</div>

                        <div className="-mr-2 flex md:hidden">
                          {/* Mobile menu button */}
                          <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XMarkIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                    <div className="space-y-1 px-2 py-3 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              pathname === item.href
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">
                            {"Fabian Ferno"}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-400">
                            {"fabianferno@gmail.com"}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <header className="py-10 mt-2">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  {pageTitle === "Home" ? "" : pageTitle}
                </h1>
              </div>
            </header>
          </div>

          <main className="-mt-32">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
