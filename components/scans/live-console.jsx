"use client";

import { useState } from "react";
import scanData from "@/mock-data/scans.json";

const tabs = [
  { key: "activityLog", label: "Activity Log" },
  { key: "verificationLoops", label: "Verification Loops" },
];

export default function LiveConsole() {
  const [activeTab, setActiveTab] = useState("activityLog");
  const { activityLog } = scanData.liveScanConsole;

  return (
    <div className="flex flex-col min-w-0 h-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 px-3 sm:px-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-2.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-teal-accent text-teal-accent"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Console Output */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-5 font-mono text-[11px] sm:text-sm leading-relaxed max-h-[300px] sm:max-h-[420px]">
        {activityLog.map((entry) => (
          <div key={entry.id} className="mb-3 sm:mb-5">
            <span className="text-gray-400 dark:text-gray-500">[{entry.timestamp}]</span>{" "}
            <span className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {entry.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
