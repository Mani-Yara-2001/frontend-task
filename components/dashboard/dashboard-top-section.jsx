import { RotateCw } from "lucide-react";
import dashboardData from "@/mock-data/dashboard.json";

const labels = [
  { key: "org", label: "Org" },
  { key: "owner", label: "Owner" },
  { key: "totalScans", label: "Total Scans" },
  { key: "scheduled", label: "Scheduled" },
  { key: "rescans", label: "Rescans" },
  { key: "failedScans", label: "Failed Scans" },
];

export default function DashBoardTopSection() {
  const data = dashboardData.dashboardtop;

  return (

    <div className="flex items-center justify-between px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 md:gap-4 xl:gap-6 flex-wrap overflow-x-auto scrollbar-hide">
        {labels.map((item, index) => (
          <div key={item.key} className="flex items-center gap-2 md:gap-3 xl:gap-4 shrink-0">
            <div className="flex items-center gap-1">
              <span className="text-[10px] md:text-xs xl:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {item.label}:
              </span>
              <span className="text-[10px] md:text-xs xl:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                {data[item.key]}
              </span>
            </div>
            {index < labels.length - 1 && (
              <div className="hidden md:block h-4 w-px bg-gray-300 dark:bg-gray-600" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[10px] md:text-xs xl:text-sm text-gray-500 dark:text-gray-400 shrink-0 ml-3">
        <RotateCw className="w-3 md:w-3.5 h-3 md:h-3.5 text-teal-500" />
        <span className="whitespace-nowrap">{data.lasttime}</span>
      </div>
    </div>
  );
}
