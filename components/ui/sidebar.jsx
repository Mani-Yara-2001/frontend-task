"use client";

import { useSelector, useDispatch } from "react-redux";
import { setExpanded, setMobileOpen } from "@/store/sidebarSlice";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";

export function Sidebar({ children }) {
  const dispatch = useDispatch();
  const { expanded, mobileOpen } = useSelector((state) => state.sidebar);

  const handleEnter = () => dispatch(setExpanded(true));
  const handleLeave = () => dispatch(setExpanded(false));
  const handleMobileClose = () => dispatch(setMobileOpen(false));

  return (
    <>
      {/*------------------------------------------------ Mobile backdrop ------------------------------*/}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMobileClose}
      />

      <aside
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-[#12141c] border-r border-gray-100 dark:border-gray-800 flex flex-col z-50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          w-64 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 ${expanded ? "lg:w-[230px]" : "lg:w-[68px]"}
        `}
      >
        {/*------------------------------------------------ Mobile close button ------------------------------*/}
        {mobileOpen && (
          <button
            onClick={handleMobileClose}
            className="lg:hidden absolute top-5 right-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        )}
        {children}
      </aside>
    </>
  );
}

export function SidebarHeader({ children }) {
  return (
    <div className="flex items-center px-5 pt-6 pb-5 shrink-0">
      {children}
    </div>
  );
}

export function SidebarGroup({ children }) {
  return (
    <div className="px-3 py-2 space-y-1">
      {children}
    </div>
  );
}

export function SidebarSeparator() {
  return <div className="mx-3 border-t border-gray-100 dark:border-gray-800" />;
}

export function SidebarNav({ children }) {
  return (
    <nav className="flex-1 overflow-y-auto overflow-x-hidden">
      {children}
    </nav>
  );
}

export function SidebarItem({
  icon: Icon,
  label,
  href,
  active,
}) {
  const dispatch = useDispatch();
  const { expanded, mobileOpen } = useSelector((state) => state.sidebar);
  const isExpanded = expanded || mobileOpen;

  return (
    <Link
      href={href}
      onClick={() => dispatch(setMobileOpen(false))}
      className={`flex items-center gap-3 h-11 px-3 rounded-xl transition-all whitespace-nowrap ${
        active
          ? "bg-[#E6F7F4] dark:bg-[#0CC8A8]/15 text-[#2BBAA4]"
          : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
      }`}
    >
      <Icon size={20} className="shrink-0" strokeWidth={active ? 2.2 : 1.8} />
      <span
        className={`text-[14px] transition-opacity duration-400 ${
          active ? "font-semibold" : "font-medium"
        } ${isExpanded ? "opacity-100" : "opacity-0"}`}
      >
        {label}
      </span>
    </Link>
  );
}

export function SidebarUser({ avatar, email, role, href = "#" }) {
  const { expanded, mobileOpen } = useSelector((state) => state.sidebar);
  const isExpanded = expanded || mobileOpen;

  return (
    <div className="border-t border-gray-100 dark:border-gray-800 shrink-0">
      <Link
        href={href}
        className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="shrink-0">{avatar}</div>
        <div
          className={`flex-1 min-w-0 transition-opacity duration-400 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[13px] text-gray-600 dark:text-gray-400 truncate">{email}</p>
          <p className="text-[13px] font-semibold text-gray-900 dark:text-white truncate">{role}</p>
        </div>
        {isExpanded && (
          <ChevronRight size={16} className="shrink-0 text-gray-400" />
        )}
      </Link>
    </div>
  );
}
