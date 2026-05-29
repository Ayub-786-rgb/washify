import { useState } from "react";
import { mockOrders } from "../constants/data";

import InvoiceModal from "../components/orders/InvoiceModal";
import TrackOrderModal from "../components/orders/TrackModal";
import FeedbackModal from "../components/orders/FeedbackModal";

export default function MyOrders() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 border border-green-200 text-green-700";
      case "In Progress":
        return "bg-blue-50 border border-blue-200 text-blue-700";
      case "Pending":
        return "bg-yellow-50 border border-yellow-200 text-yellow-700";
      default:
        return "bg-gray-50 border border-gray-200 text-gray-700";
    }
  };

  const actionBtn =
    "flex items-center gap-2 px-4 py-3 rounded-xl border border-blue-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300";

  return (
    <>
      <div className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-4">

          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">My Orders</h1>
            <p className="text-slate-500 mt-2">
              Track your laundry orders and manage services.
            </p>
          </div>

          {/* ORDERS */}
          <div className="grid gap-6">

            {mockOrders.map((o) => (
              <div
                key={o.id}
                className="
                  bg-white
                  border border-blue-100
                  rounded-2xl
                  p-6
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  hover:border-blue-300
                "
              >
                {/* TOP INFO */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                  <div>
                    <p className="text-sm text-slate-500">Order ID</p>
                    <p className="font-semibold text-lg">{o.id}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Service</p>
                    <p className="font-medium">{o.service}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Pickup Date</p>
                    <p className="font-medium">30 May 2026</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Status</p>
                    <span className={`inline-flex mt-1 px-4 py-1 rounded-full text-sm font-medium ${getStatusStyle(o.status)}`}>
                      {o.status}
                    </span>
                  </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-blue-100 my-6" />

                {/* TRACKING */}
                <div className="grid grid-cols-3 text-center">

                  {[
                    ["📦", "Picked Up"],
                    ["🧼", "Processing"],
                    ["🚚", "Delivery"],
                  ].map(([icon, label], i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xl">
                        {icon}
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{label}</p>
                    </div>
                  ))}

                </div>

                {/* DIVIDER */}
                <div className="border-t border-blue-100 my-6" />

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={() => {
                      setSelectedOrder(o);
                      setInvoiceOpen(true);
                    }}
                    className={actionBtn}
                  >
                    🧾 Invoice
                  </button>

                  <button
                    onClick={() => {
                      setSelectedOrder(o);
                      setTrackOpen(true);
                    }}
                    className={actionBtn}
                  >
                    📍 Track Order
                  </button>

                  {o.status === "Completed" && (
                    <button
                      onClick={() => {
                        setSelectedOrder(o);
                        setFeedbackOpen(true);
                      }}
                      className="
                        flex items-center gap-2 px-4 py-3 rounded-xl
                        border border-green-200 bg-green-50 text-green-700
                        transition-all duration-300
                        hover:shadow-lg hover:-translate-y-1 hover:bg-green-100
                      "
                    >
                      ⭐ Feedback
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MODALS */}
      <InvoiceModal
        open={invoiceOpen}
        onClose={() => setInvoiceOpen(false)}
        orderId={selectedOrder?.id || ""}
      />

      <TrackOrderModal
        open={trackOpen}
        onClose={() => setTrackOpen(false)}
      />

      <FeedbackModal
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </>
  );
}