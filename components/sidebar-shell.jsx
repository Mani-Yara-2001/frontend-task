"use client";

import { useSelector, useDispatch } from "react-redux";
import { setMobileOpen } from "@/store/sidebarSlice";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import WebsiteSidebar from "@/components/website-sidebar";
import ThemeToggle from "@/components/theme-toggle";

const NO_SIDEBAR_ROUTES = ["/login"];

export default function SidebarShell({ children }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const hideSidebar = NO_SIDEBAR_ROUTES.includes(pathname);

  if (hideSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0d14]">
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white dark:bg-[#12141c] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 z-30">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full border-[6px] border-[#0CC8A8] flex items-center justify-center shrink-0">
            <span className="w-2 h-2 rounded-full bg-white"></span>
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">aps</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => dispatch(setMobileOpen(true))}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <WebsiteSidebar />

      <main
        className={`min-h-screen transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pt-14 lg:pt-0 ${
          expanded ? "lg:ml-56" : "lg:ml-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
