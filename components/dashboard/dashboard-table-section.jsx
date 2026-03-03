import { Search, SlidersHorizontal, LayoutGrid, Plus } from "lucide-react";
import Table from "@/components/ui/table";
import ActionButton from "@/components/ui/action-button";
import dashboardData from "@/mock-data/dashboard.json";

export default function DashboardTableSection() {
  const data = dashboardData.dashboardtabledata;

  return (
    <div className="px-3 md:px-6 pb-4 md:pb-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-gray-200 dark:border-gray-700 gap-2">
          {/* Search */}
          <div className="relative flex-1 max-w-xs md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 md:w-4 h-3.5 md:h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 text-[10px] md:text-xs xl:text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            <ActionButton icon={SlidersHorizontal} variant="outline">
              Filter
            </ActionButton>
            <ActionButton icon={LayoutGrid} variant="outline">
              Column
            </ActionButton>
            <ActionButton icon={Plus} variant="primary">
              New scan
            </ActionButton>
          </div>
        </div>

        {/* Table */}
        <Table data={data} />
      </div>
    </div>
  );
}
