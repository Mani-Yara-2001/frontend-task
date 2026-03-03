"use client";

import PageHeader from "@/components/page-header";

export default function SchedulePage() {
  return (
    <div>
      <PageHeader
        title="Schedule"
        breadcrumbs={[{ label: "Upcoming" }]}
        actions={[{ label: "New Schedule", variant: "outline" }]}
      />
      <div className="p-8">
        <p className="text-gray-500 dark:text-gray-400">Your scheduled scans will appear here.</p>
      </div>
    </div>
  );
}
