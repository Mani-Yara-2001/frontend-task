"use client";

import { ShieldAlert, AlertTriangle, Search, ArrowUp, ArrowDown } from "lucide-react";
import dashboardData from "@/mock-data/dashboard.json";

const severityLabels = [
  {
    key: "critical",
    label: "Critical Severity",
    iconColor: "text-red-500",
    icon: ShieldAlert,
    iconBg: "bg-red-50 dark:bg-red-950",
  },
  {
    key: "high",
    label: "High Severity",
    iconColor: "text-amber-500",
    icon: AlertTriangle,
    iconBg: "bg-amber-50 dark:bg-amber-950",
  },
  {
    key: "medium",
    label: "Medium Severity",
    iconColor: "text-yellow-500",
    icon: AlertTriangle,
    iconBg: "bg-yellow-50 dark:bg-yellow-950",
  },
  {
    key: "low",
    label: "Low Severity",
    iconColor: "text-blue-500",
    icon: Search,
    iconBg: "bg-blue-50 dark:bg-blue-950",
  },
];

export default function DashboardSecondSection() {
  const data = dashboardData.dashboardsecondsection;

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 xl:gap-4 px-3 md:px-6 py-3 md:py-5">
      {severityLabels.map((severity, index) => {
        const cardData = data[index];
        const Icon = severity.icon;
        const isIncrease = cardData.changeDirection === "increase";

        return (
          <div
            key={severity.key}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 md:px-4 xl:px-5 py-3 md:py-4"
          >
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <span className="text-[10px] md:text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-400">
                {severity.label}
              </span>
              <div className={`w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 rounded-full flex items-center justify-center ${severity.iconBg}`}>
                <Icon className={`w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 ${severity.iconColor}`} />
              </div>
            </div>
            <div className="flex items-end gap-1.5 md:gap-2 xl:gap-3">
              <span className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">
                {cardData.count}
              </span>
              <div className={`flex items-center gap-0.5 text-[8px] md:text-[10px] xl:text-xs font-medium pb-0.5 md:pb-1 ${
                isIncrease ? "text-red-500" : "text-green-500"
              }`}>
                {isIncrease ? (
                  <ArrowUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                ) : (
                  <ArrowDown className="w-2.5 h-2.5 md:w-3 md:h-3" />
                )}
                <span className="hidden xl:inline">{cardData.changeText}</span>
                <span className="xl:hidden">{cardData.changePercent}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
