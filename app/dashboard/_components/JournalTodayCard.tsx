import React from "react";
import TypeAnimationComponent from "./TypeAnimationComponent";

export default function JournalTodayCard() {
  return (
    <div className="col-span-1 my-4 flex w-full gap-4 rounded-xl border p-4 shadow-sm">
      <div className="flex w-full flex-[1] flex-col items-center justify-center rounded-lg border">
        <h2 className="text-xl font-bold">Wed</h2>
        <h2 className="font-medium">12th Jun</h2>
      </div>
      <div className="flex w-full flex-[6] flex-col justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-foreground-muted">
            Today&apos;s Prompt
          </p>
          <h1 className="text-xl font-bold">
            What inspires you to become a better version of yourself?
          </h1>
          <p className="text-sm">
            What are you waiting for? Journal now for some
            <TypeAnimationComponent />
          </p>
        </div>

        <button className="primary-btn w-fit rounded-full text-sm">
          Journal Now
        </button>
      </div>
    </div>
  );
}
