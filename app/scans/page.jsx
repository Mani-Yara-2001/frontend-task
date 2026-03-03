"use client";

import { ChevronDown, X } from "lucide-react";
import PageHeader from "@/components/page-header";
import ScanTopProgress from "@/components/scans/scan-top-progress";
import LiveConsole from "@/components/scans/live-console";
import FindingLog from "@/components/scans/finding-log";
import ScanStatusBar from "@/components/scans/scan-status-bar";

export default function ScansPage() {
  return (
    <div>
      <PageHeader
        title="Scan"
        breadcrumbs={[
          { label: "Private Assets", href: "/scans" },
          { label: "New Scan" },
        ]}
        actions={[
          { label: "Export Report", variant: "outline" },
          { label: "Stop Scan", variant: "danger" },
        ]}
      />

      {/* Top Section - Scan Overview */}
      <ScanTopProgress />

      {/* Bottom Section - Shared wrapper */}
      <div className="mx-3 md:mx-6 my-3 md:my-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        {/* Common Header */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">
              Live Scan Console
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <ChevronDown className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </button>
          </div>
        </div>

        {/* Content Row: Stacked on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] lg:border-r border-b lg:border-b-0 border-gray-200 dark:border-gray-700">
            <LiveConsole />
          </div>
          <div className="w-full lg:w-[40%]">
            <FindingLog />
          </div>
        </div>

        {/* Status Bar */}
        <ScanStatusBar />
      </div>
    </div>
  );
}
