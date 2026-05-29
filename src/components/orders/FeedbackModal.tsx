import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FeedbackModal({
  open,
  onClose,
}: Props) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    console.log({
      rating,
      feedback,
    });

    onClose();
  };

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
        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-slate-900">
          Share Feedback
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Tell us about your laundry experience.
        </p>

        {/* STAR RATING */}
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-700 mb-3">
            Rate Our Service
          </p>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={rating >= star ? "#2563EB" : "none"}
                  viewBox="0 0 24 24"
                  stroke="#2563EB"
                  strokeWidth={1.8}
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.563.563 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.563.563 0 01-.84.61L12 17.77l-4.917 2.97a.563.563 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557L3.142 10.39a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </button>
            ))}
          </div>

          {rating > 0 && (
            <p className="text-center text-blue-600 font-medium mt-3">
              {rating} / 5 Stars
            </p>
          )}
        </div>

        {/* FEEDBACK */}
        <div className="mt-6">
          <label className="text-sm font-medium text-slate-700">
            Additional Comments
          </label>

          <textarea
            rows={5}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tell us what you liked or how we can improve..."
            className="
              mt-2
              w-full
              border border-blue-100
              rounded-xl
              p-3
              outline-none
              resize-none
              focus:border-blue-400
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={onClose}
            className="
              flex-1
              border border-blue-100
              rounded-xl
              py-3
              font-medium
              hover:bg-slate-50
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              flex-1
              bg-blue-600
              text-white
              rounded-xl
              py-3
              font-medium
              hover:bg-blue-700
              transition
            "
          >
            Submit
          </button>

        </div>
      </div>

    </div>
  );
}