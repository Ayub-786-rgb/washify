import { mockOrders } from "../constants/data";

export default function AdminPanel() {
  const stats = [
    { label: "Total Orders", value: mockOrders.length, icon: "📦" },
    { label: "Completed", value: mockOrders.filter(o => o.status === "Completed").length, icon: "✅" },
    { label: "In Progress", value: mockOrders.filter(o => o.status === "In Progress").length, icon: "🧼" },
    { label: "Pending", value: mockOrders.filter(o => o.status === "Pending").length, icon: "⏳" },
  ];

  const card =
    "bg-white border border-blue-100 rounded-2xl p-5 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-300";

  const statusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border border-green-200";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border border-blue-200";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Admin Dashboard
          </h1>
          <p className="text-slate-500 mt-2">
            Manage orders and monitor business activity.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((s, i) => (
            <div key={i} className={card}>
              <div className="text-2xl">{s.icon}</div>
              <p className="text-slate-500 mt-2 text-sm">{s.label}</p>
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ORDERS TABLE */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-sm overflow-hidden">

          <div className="p-5 border-b border-blue-100">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-slate-50 text-slate-600 text-sm">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {mockOrders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-t border-blue-50 hover:bg-blue-50 transition"
                  >
                    <td className="p-4 font-medium">{o.id}</td>
                    <td className="p-4">{o.service}</td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge(
                          o.status
                        )}`}
                      >
                        {o.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button className="text-blue-600 hover:underline text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">

          <div className={card}>
            <h3 className="font-semibold text-lg">Add New Service</h3>
            <p className="text-slate-500 text-sm mt-1">
              Create new laundry services or pricing updates.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl">
              + Add Service
            </button>
          </div>

          <div className={card}>
            <h3 className="font-semibold text-lg">Manage Pricing</h3>
            <p className="text-slate-500 text-sm mt-1">
              Update subscription plans and pricing.
            </p>
            <button className="mt-4 px-4 py-2 border border-blue-200 text-blue-600 rounded-xl">
              Edit Pricing
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}