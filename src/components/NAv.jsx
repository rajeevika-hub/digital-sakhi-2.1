import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-[15px] tracking-wide transition
     ${
       isActive
         ? "text-[var(--primary-color)] font-semibold"
         : "text-gray-600 hover:text-[var(--primary-color)]"
     }`;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b"
      style={{
        backgroundColor: "rgba(255,255,255,0.55)", 
        borderColor: "rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-[22px] font-semibold tracking-wide"
          style={{ color: "var(--primary-color)", fontFamily: "Inter, sans-serif" }}
        >
          Digital <span className="font-bold">सखी</span>
        </Link>


        <div
          className="hidden md:flex items-center gap-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/inspiration" className={navLinkClass}>
            Inspiration
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>


          {/* CTA */}
          <NavLink
            to="/register"
            className="ml-10 px-6 py-3 rounded-full text-sm font-medium transition active:scale-95"
            style={{
              backgroundColor: "rgba(0,0,0,0.04)",
              color: "var(--primary-color)",
            }}
          >
            Certificate
          </NavLink>

          <ThemeSwitcher />
        </div>

<button
  onClick={() => setOpen(!open)}
  className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition"
  style={{
    backgroundColor: "rgba(0,0,0,0.04)",
    color: "var(--primary-color)",
  }}
>
  {open ? "✕" : "☰"}
</button>
</div>

{/* MOBILE MENU */}
<div
  className={`md:hidden transition-all duration-500 ${
    open ? "max-h-screen flex" : "max-h-0 hidden"
  }`}
  style={{
    backgroundColor: "rgba(255,255,255,0.95)",
  }}
>
  <div
    className="px-6 py-8 flex flex-col gap-5"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    <NavLink
      to="/home"
      onClick={() => setOpen(false)}
      className="text-gray-800 text-base font-medium"
    >
      Home
    </NavLink>

    <NavLink
      to="/inspiration"
      onClick={() => setOpen(false)}
      className="text-gray-800 text-base font-medium"
    >
      Inspiration
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setOpen(false)}
      className="text-gray-800 text-base font-medium"
    >
      Contact
    </NavLink>

    <NavLink
      to="/register"
      onClick={() => setOpen(false)}
      className="mt-2 inline-flex justify-center px-6 py-3 rounded-full text-sm font-semibold"
      style={{
        backgroundColor: "rgba(0,0,0,0.06)",
        color: "var(--primary-color)",
      }}
    >
      🎓 Get Certificate
    </NavLink>

    {/* THEME SWITCHER – MOBILE FIX */}
    <div className="mt-4 flex justify-center rounded-xl py-3"
      style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
    >
      <ThemeSwitcher />
    </div>
  </div>
</div>
    </nav>
  );
}
