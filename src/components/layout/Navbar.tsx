import { NavLink } from "react-router-dom";
import WashlyLogo from "../ui/WashlyLogo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">

      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-20">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <WashlyLogo className="text-blue-600 text-4xl md:text-5xl" />

          <span className="font-extrabold text-2xl md:text-3xl text-slate-900">
            Washly
          </span>
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-0.5 md:gap-1">

          {[
            ["/", "Home"],
            ["/booking", "Book"],
            ["/pricing", "Prices"],
            ["/services", "Services"],
            ["/orders", "Orders"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `
                  px-2 py-1 text-base md:text-lg font-medium
                  transition
                  ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-blue-500"
                  }
                `
              }
            >
              {label}
            </NavLink>
          ))}

          {/* PROFILE ICON */}
          <button className="ml-2 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            {/* simple user icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </button>

        </div>

      </div>
    </nav>
  );
}