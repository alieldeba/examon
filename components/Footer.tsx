import Image from "next/image";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="px-6 py-6">
      <footer className="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 mt-16">
        <Logo width={100} height={100} className="m-auto mb-5" />
        <h5 className="text-3xl">Stay in touch with the latest posts</h5>
        <p className="text-sm mt-3">
          Promise to keep the inbox clean. No bugs.
        </p>

        <div className="mt-10">
          <div className="relative inline-block mx-auto lg:bg-gray-200 rounded-full">
            <form method="POST" action="#" className="lg:flex text-sm">
              <div className="lg:py-3 lg:px-5 flex items-center">
                <label className="hidden lg:inline-block">
                  <Image
                    src="/images/mailbox-icon.svg"
                    width={20}
                    height={20}
                    alt="mailbox letter"
                  />
                </label>

                <input
                  id="email"
                  type="text"
                  placeholder="Your email address"
                  className="lg:bg-transparent py-2 lg:py-0 pl-4 focus-within:outline-none"
                />
              </div>

              <button
                type="submit"
                className="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </section>
  );
}
