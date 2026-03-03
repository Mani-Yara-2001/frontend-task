const columns = [
  { key: "scanName", label: "Scan Name" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status" },
  { key: "progress", label: "Progress" },
  { key: "vulnerability", label: "Vulnerability" },
  { key: "lastScan", label: "Last Scan" },
];

function StatusBadge({ status }) {
  const styles = {
    Completed:
      "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800",
    Scheduled:
      "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700",
    Failed:
      "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800",
  };

  return (
    <span className={`inline-block px-1.5 md:px-2 xl:px-2.5 py-0.5 text-[9px] md:text-[10px] xl:text-xs font-medium rounded-md whitespace-nowrap ${styles[status] || styles.Scheduled}`}>
      {status}
    </span>
  );
}

function ProgressBar({ value, status }) {
  const barColor =
    status === "Failed"
      ? "bg-red-500"
      : "bg-teal-accent";

  return (
    <div className="flex items-center gap-1.5 md:gap-2 xl:gap-3">
      <div className="w-14 md:w-20 xl:w-28 h-1.5 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-[9px] md:text-[10px] xl:text-sm text-gray-700 dark:text-gray-300">{value}%</span>
    </div>
  );
}

function VulnerabilityBgc({ vulnerability }) {
  const badges = [
    { key: "critical", color: "bg-red-500", value: vulnerability.critical },
    { key: "high", color: "bg-orange-500", value: vulnerability.high },
    { key: "medium", color: "bg-yellow-500", value: vulnerability.medium },
    { key: "low", color: "bg-green-500", value: vulnerability.low },
  ];

  const visibleBadges = badges.filter((b) => b.value > 0);

  return (
    <div className="flex items-center gap-0.5 md:gap-1">
      {visibleBadges.map((badge) => (
        <span
          key={badge.key}
          className={`inline-flex items-center justify-center w-5 md:w-6 xl:w-7 h-4 md:h-5 xl:h-6 text-[8px] md:text-[9px] xl:text-xs font-bold text-white rounded-md ${badge.color}`}
        >
          {badge.value}
        </span>
      ))}
    </div>
  );
}

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[550px]">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-2 md:px-3 xl:px-4 py-2 md:py-3 text-left text-[8px] md:text-[10px] xl:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5 text-[10px] md:text-xs xl:text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {row.scanName}
              </td>
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5 text-[10px] md:text-xs xl:text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {row.type}
              </td>
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5">
                <ProgressBar value={row.progress} status={row.status} />
              </td>
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5">
                <VulnerabilityBgc vulnerability={row.vulnerability} />
              </td>
              <td className="px-2 md:px-3 xl:px-4 py-2 md:py-2.5 xl:py-3.5 text-[10px] md:text-xs xl:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {row.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
