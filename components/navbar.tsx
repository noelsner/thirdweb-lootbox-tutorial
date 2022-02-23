import Link from "next/link";
import { ConnectWallet } from "@3rdweb/react";

export default function Navbar() {
  return (
    <nav className="font-sans flex justify-between pt-4 pb-20 px-4 md:px-20 w-full h-10 ">
      <div className="flex gap-4 md:gap-10">
        <Link href="/">
          <a className="text-2xl no-underline text-gray-100 hover:text-gray-200">
            Home
          </a>
        </Link>
        <Link href="/lounge">
          <a className="text-2xl no-underline text-gray-100 hover:text-gray-200">
            Lounge
          </a>
        </Link>
      </div>
      <ConnectWallet className="bg-gray-100" />
    </nav>
  );
}
