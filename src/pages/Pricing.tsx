import { PRICING_PLANS } from "../constants/data";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            Pricing Plans
          </h1>

          <p className="mt-3 text-slate-500">
            Choose the perfect laundry package for your needs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl p-6 bg-white shadow-sm
                border transition hover:shadow-xl hover:-translate-y-1
                ${
                  plan.popular
                    ? "border-blue-500 ring-2 ring-blue-100"
                    : "border-blue-100"
                }
              `}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* PLAN NAME */}
              <h2 className="text-xl font-bold text-slate-900">
                {plan.name}
              </h2>

              {/* PRICE */}
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-blue-600">
                  ₹{plan.price}
                </span>
                <span className="text-slate-500 text-sm">
                  {plan.unit}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`
                  mt-6 w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-200 text-blue-600 hover:bg-blue-50"
                  }
                `}
              >
                Choose Plan
              </button>

            </div>
          ))}

        </div>

        {/* EXTRA INFO */}
        <div className="text-center mt-12 text-sm text-slate-500">
          Wash starting from <span className="font-semibold text-slate-700">₹50/kg</span> for non-subscription users
        </div>

      </div>
    </div>
  );
}