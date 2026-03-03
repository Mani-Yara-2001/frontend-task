"use client";

import PageHeader from "@/components/page-header";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        breadcrumbs={[{ label: "All Projects" }]}
        actions={[{ label: "New Project", variant: "outline" }]}
      />
      <div className="p-8">
        <p className="text-gray-500 dark:text-gray-400">Your projects will appear here.</p>
      </div>
    </div>
  );
}
