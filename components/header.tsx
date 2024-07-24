import Image from "next/image";
import Link from "next/link";

import logo from "../public/title.png"
import small from "../public/logo.png"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="hidden lg:block" href="/"><Image src={logo} alt="Cortex" width={200} height={100} /></Link>
      <Link className="lg:hidden" href="/"><Image src={small} alt="Cortex" width={40} height={40} /></Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/guide"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Getting Started
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Docs
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
