import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <section className="px-6 md:py-6">
      <footer className="relative border border-border rounded-xl text-center py-8 px-10 mt-16">
        <div className="absolute top-5 right-5">
          <ModeToggle />
        </div>
        <Logo width={100} height={100} className="m-auto mb-5" />
        <div className="max-w-[600px] m-auto">
          <h5 className="text-3xl">Challenge yourself with our exams</h5>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            libero quasi, odit distinctio nulla facilis ipsam saepe placeat
            asperiores reiciendis. Enim dolorum nemo aliquam libero quas illo
            consequuntur provident quae!
          </p>
        </div>
      </footer>
    </section>
  );
}
