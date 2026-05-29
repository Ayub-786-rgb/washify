import { SERVICES } from "../constants/data";

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Professional laundry and dry cleaning services designed for modern living.
            Fast pickup, careful cleaning, and doorstep delivery.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-7
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                hover:border-blue-300
                transition-all duration-300
              "
            >

              {/* ICON */}
              <div className="text-5xl">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {service.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>

              {/* PRICE */}
              <div className="mt-5">
                <span className="inline-block bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-full text-sm">
                  {service.pricePerKg
                    ? `${service.pricePerKg} / kg`
                    : `${service.pricePerItem} / item`}
                </span>
              </div>

              {/* CTA */}
              <button className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
                Book this service →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}