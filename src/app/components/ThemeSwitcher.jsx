"use client";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle light/dark mode"
      >
        {dark ? (
          // Moon icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        ) : (
          // Sun icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.343 6.343L4.929 4.929m12.02 0l-1.414 1.414M6.343 17.657l-1.414 1.414" />
          </svg>
        )}
      </button>
      <span className="text-xs font-medium select-none">{dark ? "Dark" : "Light"} Mode</span>
    </div>
  );
} 