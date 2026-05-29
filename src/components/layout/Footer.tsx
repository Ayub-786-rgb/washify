import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-blue-600">
              Washly
            </h3>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Professional laundry service delivering clean, fresh clothes right to your doorstep.
            </p>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>⚡ 24–48h delivery</p>
              <p>🚚 Doorstep pickup</p>
              <p>🧼 Premium care</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold text-slate-800 mb-3">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link className="hover:text-blue-600 transition" to="/">Home</Link>
              <Link className="hover:text-blue-600 transition" to="/booking">Book Pickup</Link>
              <Link className="hover:text-blue-600 transition" to="/services">Services</Link>
              <Link className="hover:text-blue-600 transition" to="/orders">Orders</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold text-slate-800 mb-3">
              Contact
            </h4>

            <div className="text-sm text-gray-600 space-y-2">
              <p>📞 +91 98765 43210</p>
              <p>💬 WhatsApp Support</p>
              <p>📍 Doorstep service available</p>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-10 border-t border-slate-200 pt-5 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Washly. All rights reserved.
        </div>

      </div>
    </footer>
  );
}