"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import ActionButton from "@/components/ui/action-button";

export default function PageHeader({
  title,
  breadcrumbs = [],
  actions = [],
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 md:gap-4 px-3 md:px-6 py-2.5 md:py-4">
    
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 overflow-x-auto scrollbar-hide">
          <h1 className="text-sm md:text-base xl:text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap">{title}</h1>

          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs xl:text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
                <Home className="w-3 md:w-3.5 xl:w-4 h-3 md:h-3.5 xl:h-4" />
              </Link>
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span key={index} className="flex items-center gap-1 md:gap-1.5">
                    <span>/</span>
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-[#0CC8A8]" : ""}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          )}
        </div>


        <div className="flex items-center gap-1.5 md:gap-2 xl:gap-3 shrink-0">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {actions.length > 0 &&
            actions.map((action, index) => (
              <ActionButton
                key={index}
                icon={action.icon}
                variant={action.variant || "outline"}
                href={action.href}
                onClick={action.onClick}
              >
                {action.label}
              </ActionButton>
            ))}
        </div>
      </div>


      <div className="h-px bg-gradient-to-r from-[#0CC8A8] to-transparent" />
    </div>
  );
}
