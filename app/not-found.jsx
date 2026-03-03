"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import animationData from "@/mock-data/Lonely 404.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0b0d14] px-4">
      <div className="w-full max-w-2xl">
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/dashboard"
        className="mt-6 px-6 py-2.5 rounded-lg bg-[#5BA89D] text-white font-medium hover:bg-[#4a9588] transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
