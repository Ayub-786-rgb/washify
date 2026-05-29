type Props = {
  open: boolean;
  onClose: () => void;
  orderId: string;
};

export default function InvoiceModal({
  open,
  onClose,
  orderId,
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
        <h2 className="text-xl font-semibold mb-4">
          Invoice
        </h2>

        <div className="space-y-3 text-sm">
          <p>
            <strong>Order:</strong> {orderId}
          </p>

          <p>
            <strong>Service:</strong> Laundry Service
          </p>

          <p>
            <strong>Amount:</strong> ₹249
          </p>

          <p>
            <strong>Status:</strong> Paid
          </p>
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