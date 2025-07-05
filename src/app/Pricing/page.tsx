import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background lighting effects */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/foto-gratis/fondo-blanco-textura-papel_1373-431.jpg')] bg-cover mix-blend-multiply"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gray-900 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gray-900 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          Boost your business with strategic solutions
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Packages designed to help small and medium businesses grow
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Hero Design */}
          <div className="relative border border-gray-900 rounded-xl p-8 bg-black text-white shadow-xl hover:shadow-2xl transition-shadow neon-glow">
  <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 pointer-events-none"></div>
  <div className="absolute top-0 w-full h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0"></div>

  <h3 className="text-2xl font-bold mb-4">The Starter Kit</h3>
  <p className="text-gray-300 mb-6">Everything you need to launch, grow, and look professional</p>
  <div className="text-5xl font-bold mb-8">
    $99<span className="text-gray-400 text-lg">/month</span>
  </div>
  <ul className="space-y-4 mb-8">
    {[
      'SSL certificate',
                'Domain',
                'Hosting',
      'Responsive Design',
      '2 Design Revisions',
      'integration (Patreon, Ko-fi, Socials...)',
      'Minor updates Every 3 Months',
      'Delivered in 5 days',
    ].map((item) => (
      <li key={item} className="flex items-center text-gray-200">
        <CheckCircle className="text-blue-200 mr-2" size={20} />
        {item}
      </li>
    ))}
  </ul>
</div>


          {/* Total Presence Website Plan */}
          <div className="relative text-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-shadow transform scale-105 z-20 neon-glow-blue">
            <div className="absolute inset-0 rounded-xl border-2 border-blue-400/50 pointer-events-none"></div>
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-blue-400/0 via-blue-400/60 to-blue-400/0"></div>

            <h3 className="text-2xl font-bold mb-4">Total Presence</h3>
            <p className="text-blue-100 mb-6">All-in-one web solution</p>
            <div className="text-5xl font-bold mb-8">
              $175<span className="text-blue-200 text-lg">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'SSL certificate',
                'Domain',
                'Hosting',
                'Monthly Basic Updates',
                'Responsive Design',
                '3 Design Revisions',
                'Delivered in 7 days',
                'Conversion-focused',
                'Free $1,500 redesign after 6 months',
                'Semi-annual plans available 10% off',
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle className="text-cyan-400 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Landing Page Redesign */}
          <div className="relative border border-gray-900 rounded-xl p-8 bg-black text-white shadow-xl hover:shadow-2xl transition-shadow neon-glow">
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 pointer-events-none"></div>
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0"></div>

            <h3 className="text-2xl font-bold mb-4">Landing Redesign</h3>
            <p className="text-gray-300 mb-6">Boost your conversions</p>
            <div className="text-5xl font-bold mb-8">
              $1500<span className="text-gray-400 text-lg">/one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Commercial Use',
                'Conversion-focused',
                'Professional color palette',
                'Copywriting included',
                'Basic SEO',
                '3 revisions',
                'Delivered in 7 days',
                'Accepts all payment methods',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-200">
                  <CheckCircle className="text-blue-200 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Single CTA Button */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <Link
              href="/Booking_Free_Call"
              className="px-8 py-4 bg-gray-200 hover:bg-white text-black rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2 group"
            >
              Lets Start Now Together
            </Link>

            
          </div>
      </div>
    </section>
  );
};

export default Pricing;
