"use client";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const loggedInNavbarItems = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Profile",
    href: "/profile",
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
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link href={"/"} className="text-xl font-extrabold text-primary">
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
          <div className="flex h-full items-center gap-4">
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
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex h-full items-center justify-center text-sm font-semibold ${
        pathname === href ? "text-primary" : "text-foreground"
      }`}
    >
      {title}
    </Link>
  );
}
