"use client";

import { useClientAuth } from "@/providers/auth-provider";
import Link from "next/link";
import React from "react";

export default function LandingButton() {
  const { userDetails } = useClientAuth();
  return (
    <Link
      href={userDetails ? "/home" : "/sign-up"}
      className="rounded-full bg-primary px-8 py-3 font-semibold text-white"
    >
      {userDetails ? "Dashboard" : "Get Started"}
    </Link>
  );
}
