type Order = {
  id: string;
  service: string;
  status: string;
};

type Props = {
  order: Order;
  onInvoice: () => void;
  onTrack: () => void;
  onFeedback: () => void;
};

export default function OrderCard({
  order,
  onInvoice,
  onTrack,
  onFeedback,
}: Props) {
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

  return (
    <div
      className="
        bg-white
        border border-blue-100
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-lg
        hover:border-blue-300
        transition-all
      "
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Order ID</p>
          <p className="font-semibold">{order.id}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Service</p>
          <p>{order.service}</p>
        </div>

        <span
          className={`px-4 py-1 rounded-full text-sm font-medium w-fit ${getStatusStyle(
            order.status
          )}`}
        >
          {order.status}
        </span>
      </div>

      <div className="border-t border-blue-100 my-6" />

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onInvoice}
          className="
            px-4 py-2
            rounded-xl
            border border-blue-100
            hover:bg-blue-50
          "
        >
          🧾 Invoice
        </button>

        <button
          onClick={onTrack}
          className="
            px-4 py-2
            rounded-xl
            border border-blue-100
            hover:bg-blue-50
          "
        >
          📍 Track Order
        </button>

        {order.status === "Completed" && (
          <button
            onClick={onFeedback}
            className="
              px-4 py-2
              rounded-xl
              border border-green-200
              bg-green-50
              text-green-700
            "
          >
            ⭐ Feedback
          </button>
        )}
      </div>
    </div>
  );
}