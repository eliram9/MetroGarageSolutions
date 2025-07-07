"use client";
import { useTheme } from '../../util/ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle light/dark mode"
      >
        {isDark ? (
          // Sun icon for dark mode (to switch to light)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#F3F4F6"
          >
            <circle cx="12" cy="12" r="5" fill="#F3F4F6" />
            <g stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          // Moon icon for light mode (to switch to dark)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        )}
      </button>
    </div>
  );
}