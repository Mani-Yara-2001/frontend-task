"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Apple, Infinity } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Signupform() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const inputclassname = "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-accent focus:border-transparent transition text-xs sm:text-sm";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-white rounded-2xl px-5 sm:px-10 py-6 sm:py-9 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
      <h2 className="text-xl sm:text-[28px] font-bold text-center text-gray-900 mb-0.5 sm:mb-1">
        Sign up
      </h2>
      <p className="text-center text-gray-400 text-xs sm:text-sm mb-5 sm:mb-7">
        Already have an account ?{" "}
        <Link href="/login" className="text-teal-accent hover:text-teal-600 underline font-medium">
           Log in
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name*"
          required
          className={inputclassname}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name*"
          required
          className={inputclassname}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address*"
          required
          className={inputclassname}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (8+ characters)*"
            required
            minLength={8}
            className={`${inputclassname} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <label className="flex items-start gap-2.5 cursor-pointer pt-0.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-teal-accent focus:ring-teal-accent cursor-pointer accent-teal-accent"
          />
          <span className="text-[11px] sm:text-[13px] text-gray-500 leading-[1.4]">
            I agree to Aps&apos;s{" "}
            <Link href="/terms" className="text-gray-900 underline hover:text-gray-700 font-medium">
              Terms &amp; Conditions
            </Link>{" "}
            and acknowledge the{" "}
            <Link href="/privacy" className="text-gray-900 underline hover:text-gray-700 font-medium">
              Privacy Policy
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="w-full py-3 sm:py-3.5 rounded-xl bg-[#5BA89D] text-white font-semibold hover:bg-[#4a9588] focus:outline-none focus:ring-2 focus:ring-teal-accent focus:ring-offset-2 transition cursor-pointer text-xs sm:text-sm mt-1"
        >
          Create account
        </button>
      </form>

      <div className="flex gap-2 sm:gap-2.5 mt-3 sm:mt-4">
        <button
          type="button"
          className="flex-1 py-2.5 sm:py-3 rounded-xl bg-black text-white flex items-center justify-center hover:bg-gray-900 transition cursor-pointer"
        >
          <Apple size={20} />
        </button>
        <button
          type="button"
          className="flex-1 py-2.5 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
        >
          <FcGoogle size={20} />
        </button>
        <button
          type="button"
          className="flex-1 py-2.5 sm:py-3 rounded-xl bg-[#6E5DC6] text-white flex items-center justify-center hover:bg-[#5d4db5] transition cursor-pointer"
        >
          <Infinity size={20} />
        </button>
      </div>
    </div>
  );
}
