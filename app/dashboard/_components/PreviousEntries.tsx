import React from "react";
import PreviousEntriesList from "./PreviousEntriesList";

export default function PreviousEntries() {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Previous Entries</h2>
      <h5 className="text-sm font-bold text-foreground-muted">
        Completed Entries: 47/90
      </h5>
      <PreviousEntriesList />
    </div>
  );
}
