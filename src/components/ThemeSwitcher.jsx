import React, { useState } from 'react';
import { useTheme } from '../context/themeContext.jsx';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { name: 'pink', color: 'bg-pink-500' },
    { name: 'blue', color: 'bg-blue-900' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'brown', color: 'bg-yellow-800' },
  ];

  return (
    <div className="relative w-full max-w-[150px] mx-auto">
      
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-4 py-3 rounded-2xl
          bg-white/30 backdrop-blur-md
          border border-white/40
          shadow-lg
          transition-all duration-300
          hover:scale-[1.02]
        "
      >
        <span className="flex items-center gap-2 capitalize font-medium">
          <span className={`w-4 h-4 rounded-full ${
            themes.find(t => t.name === theme)?.color
          }`} />
          Theme 
        </span>

        <span
          className={`transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          ⌄
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute left-0 right-0 mt-3  z-50
          rounded-2xl
          bg-white/70 backdrop-blur-xl
          shadow-2xl
          overflow-hidden
          transition-all duration-300
          ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => {
              setTheme(t.name);
              setOpen(false);
            }}
            className="
              w-full flex items-center gap-3
              px-4 py-3
              text-left capitalize
              hover:bg-white/60
              transition-all duration-200
            "
          >
            <span className={`w-4 h-4 rounded-full ${t.color}`} />
            <span className="flex-1">{t.name}</span>

            {theme === t.name && (
              <span className="text-green-600 font-bold">✔</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
