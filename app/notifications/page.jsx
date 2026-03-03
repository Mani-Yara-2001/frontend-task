"use client";

import PageHeader from "@/components/page-header";

export default function NotificationsPage() {
  return (
    <div>
      <PageHeader
        title="Notifications"
        breadcrumbs={[{ label: "All Notifications" }]}
        actions={[]}
      />
      <div className="p-8">
        <p className="text-gray-500 dark:text-gray-400">Your notifications will appear here.</p>
      </div>
    </div>
  );
}
