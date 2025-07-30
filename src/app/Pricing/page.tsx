"use client"
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const starterFeatures = [
  "SSL certificate",
  "Domain + Hosting",
  "Responsive Design",
  "2 Design Revisions",
  "Integration (Patreon, Ko-fi, Socials...)",
  "Minor updates Every 3 Months",
  "Delivered in 5 days",
];

const totalPresenceFeatures = [
  "SSL certificate",
  "Domain + Hosting",
  "Monthly Basic Updates",
  "Responsive Design",
  "3 Design Revisions",
  "Delivered in 7 days",
  "Conversion-focused",
  "Free $1,500 redesign after 6 months",
  "Semi-annual plans available 10% off",
];

const Pricing = () => {
  const [isStarter, setIsStarter] = useState(false);

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Boost your business with strategic solutions
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          Packages designed to help small and medium businesses grow
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Plan 1: Toggle */}
          <div className="relative border border-gray-800 rounded-xl p-8 bg-black shadow-xl transition-all">
            <div className="absolute top-4 right-4">
<button
  onClick={() => setIsStarter(!isStarter)}
  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
    isStarter ? "bg-green-500" : "bg-gray-400"
  }`}
>
  <div
    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
      isStarter ? "translate-x-5" : "translate-x-0"
    }`}
  />
</button>

            </div>

            <h3 className="text-2xl font-bold mb-4">
              {isStarter ? "Starter Kit" : "Total Presence"}
            </h3>
            <p className="text-gray-400 mb-6">
              {isStarter
                ? "Everything you need to launch, grow, and look professional"
                : "All-in-one web solution"}
            </p>
            <div className="text-5xl font-bold mb-8">
              {isStarter ? "$99" : "$175"}
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {(isStarter ? starterFeatures : totalPresenceFeatures).map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle className="text-gray-100 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 2: One-time Redesign */}
          <div className="relative border border-gray-800 rounded-xl p-8 bg-black shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">Landing Redesign</h3>
            <p className="text-gray-400 mb-6">Boost your conversions</p>
            <div className="text-5xl font-bold mb-8">
              $1500<span className="text-gray-400 text-lg">/one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Commercial Use",
                "Conversion-focused",
                "Professional color palette",
                "Copywriting included",
                "Basic SEO",
                "3 revisions",
                "Delivered in 7 days",
                "Accepts all payment methods",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle className="text-gray-100 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 3: Subscription Unlimited */}
          <div className="relative border border-gray-800 rounded-xl p-8 bg-black shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-4">Unlimited Design</h3>
            <p className="text-gray-400 mb-6">Figma-based design subscription</p>
            <div className="text-5xl font-bold mb-8">
              $3600<span className="text-gray-400 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Unlimited Figma designs",
                "1 project at a time",
                "5-day delivery per project",
                "2 revisions per project",
                "Commercial use",
                "Ideal for SaaS & Startups",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle className="text-gray-100 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/Booking_Free_Call"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-lg transition shadow-lg"
          >
            Let’s Start Now Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
