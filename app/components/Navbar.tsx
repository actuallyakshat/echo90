import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const loggedInNavbarItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
];

const loggedOutNavbarItems = [
  {
    id: 1,
    title: "Login",
    href: "/sign-in",
  },
  {
    id: 2,
    title: "Signup",
    href: "/sign-up",
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 z-[51] h-16 w-full border-b px-4">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between">
        <Link href={"/"} className="text-xl font-extrabold">
          Echo90
        </Link>
        <SignedOut>
          <div className="flex items-center gap-4">
            {loggedOutNavbarItems.map((item) => (
              <NavbarItem key={item.id} href={item.href} title={item.title} />
            ))}
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            {loggedInNavbarItems.map((item) => (
              <NavbarItem key={item.id} href={item.href} title={item.title} />
            ))}
            <SignOutButton>
              <Link href="/sign-in" className="text-sm font-medium">
                Sign Out
              </Link>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}

function NavbarItem({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="text-sm font-medium">
      {title}
    </Link>
  );
}
