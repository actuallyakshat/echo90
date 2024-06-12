import React from "react";

const previous_entries = [
  {
    id: 1,
    title: "What are you afraid of?",
    content: "lorem ipsum some sample content",
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "What is your idea of success?",
    content: "lorem ipsum some sample content",
    date: "2022-01-02",
  },
];
export default function PreviousEntriesList() {
  return (
    <div className="my-3">
      {previous_entries.map((entry) => (
        <div key={entry.id} className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="font-bold">{entry.title}</div>

            <div className="text-sm font-bold text-foreground-muted">
              {entry.date}
            </div>
          </div>
          <div className="text-sm">{entry.content}</div>
        </div>
      ))}
    </div>
  );
}
