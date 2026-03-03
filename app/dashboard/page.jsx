"use client";

import PageHeader from "@/components/page-header";
import DashBoardTopSection from "@/components/dashboard/dashboard-top-section";
import DashboardSecondSection from "@/components/dashboard/dashboard-second-section";
import DashboardTableSection from "@/components/dashboard/dashboard-table-section";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Scan"
        breadcrumbs={[
          { label: "Private Assets", href: "#" },
          { label: "New Scan" },
        ]}
        actions={[
          { label: "Export Report", variant: "outline" },
          { label: "Stop Scan", variant: "danger" },
        ]}
      />
      <DashBoardTopSection />
      <DashboardSecondSection />
      <DashboardTableSection />
    </div>
  );
}
