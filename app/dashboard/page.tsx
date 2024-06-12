import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import JournalTodayCard from "./_components/JournalTodayCard";
import PreviousEntries from "./_components/PreviousEntries";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="mx-auto max-w-screen-2xl pt-16">
      <h1 className="pt-12 text-3xl font-bold">Hey, {user?.firstName} 👋🏼</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <JournalTodayCard />
        <JournalTodayCard />
      </div>

      <PreviousEntries />
    </main>
  );
}
