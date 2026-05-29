type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TrackOrderModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4">

      <div
        className="
          bg-white
          border border-blue-100
          rounded-2xl
          p-6
          w-full
          max-w-md
          shadow-xl
        "
      >
        <h2 className="text-xl font-semibold mb-6">
          Track Order
        </h2>

        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <span>✅</span>
            <p>Order Confirmed</p>
          </div>

          <div className="flex items-center gap-3">
            <span>🧼</span>
            <p>Cleaning In Progress</p>
          </div>

          <div className="flex items-center gap-3">
            <span>🚚</span>
            <p>Out For Delivery</p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="
            mt-6
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
          "
        >
          Close
        </button>
      </div>

    </div>
  );
}