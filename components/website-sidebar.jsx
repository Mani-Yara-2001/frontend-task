"use client";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import {
  LayoutDashboard,
  FolderKanban,
  Radar,
  CalendarClock,
  Bell,
  Settings,
  CircleHelp,
  CircleUserRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarGroup,
  SidebarSeparator,
  SidebarItem,
  SidebarUser,
} from "@/components/ui/sidebar";

const mainNav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: Radar, label: "Scans", href: "/scans" },
  { icon: CalendarClock, label: "Schedule", href: "/schedule" },
];

const secondaryNav = [
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: CircleHelp, label: "Support", href: "/support" },
];

function SidebarLogo() {
  const { expanded, mobileOpen } = useSelector((state) => state.sidebar);
  const isExpanded = expanded || mobileOpen;

  return (
    <div className="flex items-center gap-3 overflow-hidden">
      <span className="w-6 h-6 rounded-full border-[6px] border-[#0CC8A8] flex items-center justify-center shrink-0">
        <span className="w-2 h-2 rounded-full bg-white"></span>
      </span>
      <span
        className={`text-xl font-bold text-gray-900 dark:text-white tracking-tight transition-opacity duration-200 whitespace-nowrap ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        aps
      </span>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
      <CircleUserRound size={24} className="text-amber-700" />
    </div>
  );
}

export default function WebsiteSidebar() {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      <SidebarNav>
        <SidebarGroup>
          {mainNav.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={isActive(item.href)}
            />
          ))}
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          {secondaryNav.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={isActive(item.href)}
            />
          ))}
        </SidebarGroup>
      </SidebarNav>

      <SidebarUser
        avatar={<UserAvatar />}
        email="admin@edu.com"
        role="Security Lead"
        href="/profile"
      />
    </Sidebar>
  );
}
