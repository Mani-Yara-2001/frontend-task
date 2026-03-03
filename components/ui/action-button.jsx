"use client";

import Link from "next/link";

export default function ActionButton({
  children,
  icon: Icon,
  variant = "outline",
  bg,
  textColor,
  borderColor,
  hoverBg,
  href,
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-1 md:gap-1.5 px-2.5 md:px-3 xl:px-4 py-1.5 md:py-2 text-[10px] md:text-xs xl:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap";

  const variants = {
    outline:
      "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700",
    danger:
      "border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900",
    primary:
      "border-0 bg-teal-accent text-white hover:bg-teal-600",
  };

  // Build custom style overrides when color props are passed
  const customStyle =
    bg || textColor || borderColor
      ? [
          borderColor ? `border ${borderColor}` : "",
          bg || "",
          textColor || "",
          hoverBg || "",
        ]
          .filter(Boolean)
          .join(" ")
      : "";

  const classes = `${base} ${customStyle || variants[variant]} ${className}`.trim();

  const content = (
    <>
      {Icon && <Icon className="w-3.5 md:w-4 h-3.5 md:h-4" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
