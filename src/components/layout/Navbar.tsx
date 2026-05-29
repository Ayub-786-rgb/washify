import { useState } from "react";
import { NavLink } from "react-router-dom";
import WashlyLogo from "../ui/WashlyLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["/", "Home"],
    ["/booking", "Book"],
    ["/pricing", "Prices"],
    ["/services", "Services"],
    ["/orders", "Orders"],
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between relative">

        {/* LEFT: MOBILE MENU + LOGO */}
        <div className="flex items-center gap-3">

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <WashlyLogo className="text-blue-600 text-4xl md:text-5xl" />
            <span className="font-extrabold text-2xl md:text-3xl text-slate-900">
              Washly
            </span>
          </div>
        </div>

        {/* CENTER: DESKTOP LINKS (PERFECT CENTER) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2">

          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 text-lg font-medium rounded-lg transition ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-slate-600 hover:text-blue-500 hover:bg-slate-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

        </div>

        {/* RIGHT: PROFILE (ALL SCREENS) */}
        <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition ring-1 ring-slate-200 hover:scale-105">
          👤
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t bg-white ${
          open ? "max-h-96 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 gap-2">

          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md text-base transition ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

        </div>
      </div>

    </nav>
  );
}