import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return <div>Home</div>;
}
