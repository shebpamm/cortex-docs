import Image from "next/image";
import Link from "next/link";

import logo from "../public/title.png"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/"><Image src={logo} alt="Cortex" width={200} height={100} /></Link>
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
