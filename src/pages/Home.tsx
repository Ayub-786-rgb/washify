import { Link } from "react-router-dom";
import { SERVICES } from "../constants/data";
import { WHATSAPP_NUMBER } from "../constants/data";

const FEATURES = [
  "⚡ 24–48 Hour Delivery",
  "🚚 Free Doorstep Pickup",
  "🧼 Premium Fabric Care",
  "💳 Secure Payments",
];

const STEPS = [
  {
    icon: "📅",
    title: "Schedule Pickup",
    desc: "Book a pickup in under 30 seconds from your phone.",
  },
  {
    icon: "🚚",
    title: "We Collect",
    desc: "Our rider collects your clothes at your convenience.",
  },
  {
    icon: "✨",
    title: "We Deliver Clean",
    desc: "Fresh, folded, and ready-to-wear clothes delivered back.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO (MOBILE FIRST) ================= */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white py-14 md:py-24">

        <div className="max-w-5xl mx-auto px-4 text-center">

          {/* HEADLINE */}
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Professional Laundry,<br />
            Delivered to Your Doorstep
          </h1>

          {/* TAGLINE */}
          <p className="mt-4 text-base md:text-xl text-slate-600 font-medium">
            Clean clothes, without the effort.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Fast, reliable laundry service with pickup, professional cleaning, and doorstep delivery across your city.
          </p>

          {/* IMAGE (MOBILE OPTIMIZED) */}
          <div className="mt-6 md:mt-10">
            <img
              src="/laundry-heros.jpg"
              alt="Clean folded clothes"
              className="
                w-full max-w-md md:max-w-2xl mx-auto
                rounded-2xl shadow-lg
                object-cover
              "
            />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/booking">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition">
                Book Pickup
              </button>
            </Link>

            <Link to="/services">
              <button className="w-full sm:w-auto border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition">
                Explore Services
              </button>
            </Link>
          </div>

          {/* FEATURES (MOBILE WRAP FRIENDLY) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {FEATURES.map((item, i) => (
              <span
                key={i}
                className="bg-white border border-blue-100 shadow-sm px-3 py-2 rounded-full text-xs md:text-sm text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Our Premium Services
            </h2>
            <p className="mt-2 text-slate-500 text-sm md:text-base">
              Fabric care designed for everyday and premium clothing needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="
                  border border-blue-100
                  rounded-2xl p-5 bg-white
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  hover:border-blue-300
                  transition
                "
              >
                <div className="text-3xl">{service.icon}</div>

                <h3 className="mt-3 text-lg font-semibold">
                  {service.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-14 md:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-4xl font-bold">
            Simple Process, Reliable Service
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">

            {STEPS.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{step.icon}</div>

                <h3 className="mt-3 font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <a
        href={`https://wa.me/91${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20pickup`}
        target="_blank"
        rel="noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          bg-green-500 hover:bg-green-600
          w-14 h-14
          flex items-center justify-center
          rounded-full
          shadow-lg
          transition
          hover:scale-110
          animate-pulse
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.91 2.92 4.63 4.1.65.28 1.16.45 1.56.58.65.21 1.23.18 1.69.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.62.84 5.04 2.28 7.02L4 29l7.19-2.24A11.9 11.9 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.92 0-3.7-.55-5.21-1.5l-.37-.23-4.27 1.33 1.39-4.16-.24-.38A9.93 9.93 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </a>

    </div>
  );
}