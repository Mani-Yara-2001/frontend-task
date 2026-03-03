"use client";

import { Bug, Settings, Shield, ClipboardCheck, FileText } from "lucide-react";
import scanData from "@/mock-data/scans.json";

const stageIcons = [Bug, Settings, Shield, ClipboardCheck, FileText];

const detailLabels = [
  { key: "scanType", label: "Scan Type" },
  { key: "targets", label: "Targets" },
  { key: "startedAt", label: "Started At" },
  { key: "credentials", label: "Credentials" },
  { key: "files", label: "Files" },
  { key: "checklists", label: "Checklists" },
];

function calcDashOffset(radius, percent) {
  const circumference = 2 * Math.PI * radius;
  return circumference - (percent / 100) * circumference;
}

function ProgressRing({ radius, size, strokeWidth, percent, trackClass, barClass }) {
  const circumference = 2 * Math.PI * radius;

  return (
    <svg className={`${size} -rotate-90`} viewBox={`0 0 ${radius * 2 + 6} ${radius * 2 + 6}`}>
      <circle
        cx={radius + 3}
        cy={radius + 3}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        className={trackClass}
      />
      {percent > 0 && (
        <circle
          cx={radius + 3}
          cy={radius + 3}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={calcDashOffset(radius, percent)}
          strokeLinecap="round"
          className={barClass}
        />
      )}
    </svg>
  );
}

function StageItem({ stage, index, isLast }) {
  const Icon = stageIcons[index];
  const { progress } = stage;
  const isHighlighted = progress > 0;

  const iconColor = isHighlighted
    ? "text-teal-accent"
    : "text-gray-400 dark:text-gray-500";

  const labelColor = isHighlighted
    ? "text-gray-900 dark:text-white"
    : "text-gray-400 dark:text-gray-500";

  return (
    <div className="flex items-start flex-1 last:flex-none">
      <div className="flex flex-col items-center gap-1 md:gap-1.5">
        <div className="relative w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10">
          <ProgressRing
            radius={17}
            size="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10"
            strokeWidth={2.5}
            percent={progress}
            trackClass="text-gray-200 dark:text-gray-700"
            barClass="text-teal-accent"
          />
          <div className={`absolute inset-0 flex items-center justify-center ${iconColor}`}>
            <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
        </div>

        <span className={`text-[9px] md:text-[10px] xl:text-[11px] font-medium ${labelColor}`}>
          {stage.name}
        </span>
      </div>

      {!isLast && (
        <div className="flex-1 flex items-center pt-4 md:pt-4.5 xl:pt-5 px-1 md:px-2">
          <div
            className={`h-0.5 w-full rounded-full ${
              progress === 100 ? "bg-teal-accent" : "bg-gray-200 dark:bg-gray-700"
            }`}
          />
        </div>
      )}
    </div>
  );
}

function ScanDetails({ details }) {
  return (
    <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-between px-4 md:px-6 xl:px-8 py-2.5 md:py-3 gap-2 sm:gap-0">
      {detailLabels.map((item) => (
        <div key={item.key} className="flex flex-col gap-0.5">
          <span className="text-[9px] md:text-[10px] xl:text-[11px] text-gray-400 dark:text-gray-500">
            {item.label}
          </span>
          <span
            className={`text-[11px] md:text-xs xl:text-sm font-semibold ${
              item.key === "checklists" ? "text-teal-accent" : "text-gray-900 dark:text-white"
            }`}
          >
            {details[item.key]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ScanTopProgress() {
  const { progress, progressStatus, stages, details } =
    scanData.scantopprogress;

  return (
    <div className="mx-3 md:mx-6 mt-3 md:mt-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-30 md:w-35 flex items-center justify-center py-4 md:py-5 px-4 shrink-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <ProgressRing
              radius={40}
              size="w-20 h-20 md:w-24 md:h-24"
              strokeWidth={7}
              percent={progress}
              trackClass="text-gray-200 dark:text-gray-700"
              barClass="text-teal-accent"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                {progress}%
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-500 dark:text-gray-400">
                {progressStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="h-px sm:h-auto sm:w-px bg-gray-200 dark:bg-gray-700" />

        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between px-4 md:px-6 xl:px-8 py-3 md:py-4">
            {stages.map((stage, index) => (
              <StageItem
                key={stage.name}
                stage={stage}
                index={index}
                isLast={index === stages.length - 1}
              />
            ))}
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-700" />

          <ScanDetails details={details} />
        </div>
      </div>
    </div>
  );
}
