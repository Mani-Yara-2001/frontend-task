"use client";

import scanData from "@/mock-data/scans.json";

const colorMap = {
  red: "text-red-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  blue: "text-blue-500",
};

export default function ScanStatusBar() {
  const { left, right } = scanData.statusBar;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 gap-1.5 sm:gap-0">
      {/* Left - Sub-Agents, Parallel Executions, Operations */}
      <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
        {left.map((item) => (
          <div key={item.label} className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
            <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
              {item.label}:{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {item.value}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Right - Critical, High, Medium, Low */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {right.map((item) => (
          <span
            key={item.label}
            className={`text-[10px] sm:text-xs font-semibold ${colorMap[item.color] || "text-gray-500"}`}
          >
            {item.label}: {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}
