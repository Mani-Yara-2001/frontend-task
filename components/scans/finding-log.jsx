"use client";

import scanData from "@/mock-data/scans.json";

const severityLabels = [
  {
    key: "Critical",
    label: "Critical",
    badgeColor: "bg-red-500 text-white",
    pathColor: "text-teal-accent",
  },
  {
    key: "High",
    label: "High",
    badgeColor: "bg-orange-500 text-white",
    pathColor: "text-teal-accent",
  },
  {
    key: "Medium",
    label: "Medium",
    badgeColor: "bg-yellow-500 text-white",
    pathColor: "text-teal-accent",
  },
  {
    key: "Low",
    label: "Low",
    badgeColor: "bg-blue-500 text-white",
    pathColor: "text-teal-accent",
  },
];

export default function FindingLog() {
  const findings = scanData.findingLog;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
          Finding Log
        </span>
      </div>

      {/* Findings List */}
      <div className="flex-1 overflow-y-auto max-h-[300px] sm:max-h-[460px] p-3 sm:p-4 space-y-2 sm:space-y-3">
        {findings.map((finding) => {
          const severity = severityLabels.find((s) => s.key === finding.severity);

          return (
            <div
              key={finding.id}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4"
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span
                  className={`inline-block px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded ${
                    severity?.badgeColor || "bg-gray-500 text-white"
                  }`}
                >
                  {finding.severity}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                  {finding.time}
                </span>
              </div>
              <h4 className="text-[11px] sm:text-sm font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                {finding.title}
              </h4>
              <p className={`text-[10px] sm:text-xs mb-1 sm:mb-1.5 ${severity?.pathColor || "text-teal-accent"}`}>
                {finding.path}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {finding.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
