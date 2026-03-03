"use client";

import PageHeader from "@/components/page-header";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        breadcrumbs={[{ label: "General" }]}
        actions={[]}
      />
      <div className="p-8">
        <p className="text-gray-500 dark:text-gray-400">Your settings will appear here.</p>
      </div>
    </div>
  );
}
