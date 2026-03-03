import Image from "next/image";
import { Check, Star } from "lucide-react";
import Signupform from "@/components/Sign-up-form";

const checkItems = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

function Ratingui({ className }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-1.5 mb-0.5">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="text-white font-medium text-xs">Trustpilot</span>
      </div>
      <p className="text-white font-bold text-[15px]">
        Rated 4.5/5.0{" "}
        <span className="text-white/40 font-normal text-xs">(100k+ reviews)</span>
      </p>
    </div>
  );
}

function Logo({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <div className="w-6 h-6 rounded-full bg-teal-accent flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
      </div>
      <span className="text-white text-base font-semibold tracking-tight">aps</span>
    </div>
  );
}

function Textpoints() {
  return (
    <div className="space-y-2.5 lg:space-y-3">
      {checkItems.map((text) => (
        <div key={text} className="flex items-start gap-2.5">
          <Check className="w-4.5 h-4.5 text-white mt-0.5 shrink-0" />
          <p className="text-white/80 text-[13px] leading-normal">{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function LoginPageInterface() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src="/login-bg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        <div className="flex flex-col pt-5 px-5 lg:w-[52%] lg:justify-between lg:py-6 lg:pl-16 lg:pr-10">
          <Logo />

          <div className="mt-6 px-1 lg:-mt-6 lg:px-0">
            <h1 className="text-xl sm:text-3xl lg:text-[42px] font-bold text-white leading-tight lg:leading-[1.18] tracking-tight lg:whitespace-nowrap">
              Expert level Cybersecurity
              <br />
              in <span className="text-teal-accent">hours</span> not weeks.
            </h1>
            <p className="text-white font-semibold text-sm mt-5 lg:mt-8 mb-3 lg:mb-4">
              What's included
            </p>
            <Textpoints />
          </div>

          <Ratingui className="hidden lg:block pb-4" />
        </div>

        <div className="flex-1 flex flex-col items-center px-5 py-6 lg:items-end lg:justify-center lg:py-0 lg:pr-16 lg:pl-0">
          <div className="w-full max-w-md">
            <Signupform />
          </div>

          <Ratingui className="lg:hidden mt-6 pb-6 text-center" />
        </div>
      </div>
    </div>
  );
}
