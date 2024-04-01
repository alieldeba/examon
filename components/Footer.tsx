import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t flex items-center justify-between">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="/contributors"
            className="font-medium underline underline-offset-4 text-primary"
          >
            examon contributors
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/alieldeba/examon"
            target="_blank"
            className="font-medium underline underline-offset-4 text-primary"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
      <ModeToggle />
    </footer>
  );
}
