import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../constants/data";

// CalendarDaysIcon SVG
function CalendarDaysIcon({ className = "w-5 h-5 text-primary mr-2" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
      <circle cx="8.5" cy="14.5" r="1" fill="currentColor" />
      <circle cx="12" cy="14.5" r="1" />
      <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
    </svg>
  );
}

// ClockIcon SVG
function ClockIcon({ className = "w-5 h-5 text-primary mr-2" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  );
}

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const [errors, setErrors] = useState<any>({});
  const [toast, setToast] = useState("");

  const [openService, setOpenService] = useState(false);
  const [openPicker, setOpenPicker] = useState<"date" | "time" | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenService(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDates = () => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      arr.push(d);
    }
    return arr;
  };

  const times = [
    "08:00 AM","09:00 AM","10:00 AM","11:00 AM",
    "12:00 PM","01:00 PM","02:00 PM","03:00 PM",
    "04:00 PM","05:00 PM","06:00 PM","07:00 PM"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    setErrors((prev: any) => {
      const updated = { ...prev };

      if (name === "name" && value.trim()) delete updated.name;
      if (name === "address" && value.trim()) delete updated.address;
      if (name === "service" && value) delete updated.service;
      if (name === "date" && value) delete updated.date;
      if (name === "time" && value) delete updated.time;

      if (name === "phone") {
        if (isValidPhone(value)) delete updated.phone;
        else updated.phone = "Enter valid 10-digit phone";
      }

      if (name === "email" && isValidEmail(value)) delete updated.email;

      return updated;
    });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!isValidPhone(form.phone)) newErrors.phone = "Enter valid 10-digit phone";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(form.email)) newErrors.email = "Enter valid email";

    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.service) newErrors.service = "Select a service";
    if (!form.date) newErrors.date = "Select pickup date";
    if (!form.time) newErrors.time = "Select pickup time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setToast("Service Booked Successfully 🎉");

    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      date: "",
      time: "",
      notes: ""
    });

    setTimeout(() => setToast(""), 2500);
  };

  const inputClass =
    "w-full border border-blue-200 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white";

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16 px-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-5">

          {/* TITLE */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Book Laundry Service
            </h2>
            <p className="mt-2 text-slate-500">
              Schedule your pickup and we’ll take care of the rest.
            </p>
          </div>

          {/* NAME */}
          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* PHONE */}

          <div>
            <label className="font-semibold text-gray-700">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="tel"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className={inputClass} />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* ADDRESS */}
          <div>
            <label className="font-semibold text-gray-700">Pickup Address</label>
            <textarea name="address" value={form.address} onChange={handleChange} className={inputClass} />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>

          {/* SERVICE */}
          <div className="relative" ref={dropdownRef}>
            <label className="font-semibold text-gray-700">Service</label>
            <div
              onClick={() => setOpenService((v) => !v)}
              className="border border-blue-200 rounded-lg p-3 mt-1 cursor-pointer bg-white"
            >
              {form.service || "Select Service"}
            </div>

            {openService && (
              <div className="absolute z-10 left-0 right-0 bg-white border border-blue-200 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className={`p-3 hover:bg-blue-50 cursor-pointer flex items-center gap-2 ${
                      form.service === service.name ? "bg-blue-100" : ""
                    }`}
                    onClick={() => {
                      setForm({ ...form, service: service.name });
                      setOpenService(false);
                      setErrors((prev: any) => ({ ...prev, service: undefined }));
                    }}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            )}

            {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
          </div>

          {/* DATE & TIME */}
          <div className="grid grid-cols-2 gap-3">
            {/* DATE */}
            <div>
              <button
                type="button"
                onClick={() => setOpenPicker(openPicker === "date" ? null : "date")}
                className={inputClass + " flex items-center"}
              >
                <CalendarDaysIcon />
                <span>{form.date || "Select Date"}</span>
              </button>

              {openPicker === "date" && (
                <div className="absolute z-20 bg-white border border-blue-200 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                  {getDates().map((d) => {
                    const dateStr = d.toLocaleDateString(undefined, {
                      weekday: "short",
                      month: "short",
                      day: "numeric"
                    });

                    return (
                      <div
                        key={d.toISOString()}
                        className={`p-3 hover:bg-blue-50 cursor-pointer ${
                          form.date === dateStr ? "bg-blue-100" : ""
                        }`}
                        onClick={() => {
                          setForm({ ...form, date: dateStr });
                          setOpenPicker(null);
                          setErrors((prev: any) => ({ ...prev, date: undefined }));
                        }}
                      >
                        {dateStr}
                      </div>
                    );
                  })}
                </div>
              )}

              {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
            </div>

            {/* TIME */}
            <div>
              <button
                type="button"
                onClick={() => setOpenPicker(openPicker === "time" ? null : "time")}
                className={inputClass + " flex items-center"}
              >
                <ClockIcon />
                <span>{form.time || "Select Time"}</span>
              </button>

              {openPicker === "time" && (
                <div className="absolute z-20 bg-white border border-blue-200 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                  {times.map((t) => (
                    <div
                      key={t}
                      className={`p-3 hover:bg-blue-50 cursor-pointer ${
                        form.time === t ? "bg-blue-100" : ""
                      }`}
                      onClick={() => {
                        setForm({ ...form, time: t });
                        setOpenPicker(null);
                        setErrors((prev: any) => ({ ...prev, time: undefined }));
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              )}

              {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
            </div>
          </div>

          {/* NOTES */}
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className={inputClass}
            placeholder="Special instructions (optional)"
          />

          {/* TOAST (moved above button) */}
          {toast && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
              {toast}
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}