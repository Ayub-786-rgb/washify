export default function TrackOrder() {
  return (
    <div className="p-4 space-y-3">
      <input className="border p-3 rounded-lg w-full" placeholder="Order ID" />
      <button className="w-full bg-primary text-white py-2 rounded-lg">
        Track
      </button>
    </div>
  );
}