import { useState } from "react";

export default function CustomDateTimeInputs({
  value,
  onChange
}: {
  value: { date: string; time: string };
  onChange: (val: { date: string; time: string }) => void;
}) {
  const [open, setOpen] = useState<"date" | "time" | null>(null);

  // Generate next 7 days (Uber style)
  const getDates = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  };

  // Time slots (Rapido/Uber style)
  const times = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM"
  ];

  return (
    <div className="space-y-3">

      {/* DATE + TIME BUTTONS */}
      <div className="grid grid-cols-2 gap-3">

        {/* DATE */}
        <button
          onClick={() => setOpen("date")}
          className="w-full bg-gray-50 border border-blue-200 rounded-lg p-3 text-left"
        >
          <p className="text-xs text-gray-500">Pickup Date</p>
          <p className="text-sm font-semibold text-gray-800">
            {value.date || "Select date"}
          </p>
        </button>

        {/* TIME */}
        <button
          onClick={() => setOpen("time")}
          className="w-full bg-gray-50 border border-blue-200 rounded-lg p-3 text-left"
        >
          <p className="text-xs text-gray-500">Pickup Time</p>
          <p className="text-sm font-semibold text-gray-800">
            {value.time || "Select time"}
          </p>
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-end justify-center z-50"
          onClick={() => setOpen(null)}
        >
          {/* SHEET */}
          <div
            className="bg-white w-full max-w-md rounded-t-2xl p-4 max-h-[60vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="text-center mb-3">
              <p className="font-semibold text-gray-800">
                {open === "date" ? "Select Date" : "Select Time"}
              </p>
            </div>

            {/* DATE LIST */}
            {open === "date" &&
              getDates().map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    const formatted = d.toDateString();
                    onChange({ ...value, date: formatted });
                    setOpen(null);
                  }}
                  className="p-3 rounded-lg hover:bg-blue-50 cursor-pointer text-gray-700"
                >
                  {d.toDateString()}
                </div>
              ))}

            {/* TIME LIST */}
            {open === "time" &&
              times.map((t, i) => (
                <div
                  key={i}
                  onClick={() => {
                    onChange({ ...value, time: t });
                    setOpen(null);
                  }}
                  className="p-3 rounded-lg hover:bg-blue-50 cursor-pointer text-gray-700"
                >
                  {t}
                </div>
              ))}

          </div>
        </div>
      )}
    </div>
  );
}