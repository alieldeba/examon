import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="px-6 md:py-6">
      <footer className="bg-slate-50 border border-black border-opacity-5 rounded-xl text-center py-8 px-10 mt-16">
        <Logo width={100} height={100} className="m-auto mb-5" />
        <div className="max-w-[600px] m-auto">
          <h5 className="text-3xl">Challenge yourself with our exams</h5>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            libero quasi, odit distinctio nulla facilis ipsam saepe placeat
            asperiores reiciendis. Enim dolorum nemo aliquam libero quas illo
            consequuntur provident quae!
          </p>
          <p className="text-sm mt-3">
            Made with ❤️ By{" "}
            <Link
              href="https://github.com/alieldeba"
              className="hover:underline"
            >
              @alieldeba
            </Link>
            ,
            <Link
              href="https://github.com/OmarWebDev"
              className="hover:underline"
            >
              @omarkhaled
            </Link>
            ,
            <Link
              href="https://github.com/Belal-2000"
              className="hover:underline"
            >
              @belalibrahim
            </Link>
          </p>
        </div>
      </footer>
    </section>
  );
}
