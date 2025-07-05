import { XCircle, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            High-Performance Websites <br />
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
              all-inclusive for $175/month
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exclusive offer: First professional website with $1500 Figma redesign FREE + hosting + domain + SSL for only $175/month (Only 7 clients left)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Pain Points */}
          <div className="border-l-2 border-red-500/30 pl-6">
            <h3 className="flex items-center text-2xl font-bold mb-6">
              <XCircle className="text-red-500 mr-3" size={32} />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Common problems:
              </span>
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Websites that don’t convert visitors into customers
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                High upfront costs ($4000+)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Hosting, domain, and SSL sold as add-ons
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Designs not optimized for conversions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                No post-launch support
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="border-l-2 border-cyan-500/30 pl-6">
            <h3 className="flex items-center text-2xl font-bold mb-6">
              <CheckCircle className="text-cyan-400 mr-3" size={32} />
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Our solution:
              </span>
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <strong className="text-cyan-400 mr-2">All-inclusive:</strong> 
                Website + hosting + domain + SSL + $1500 Figma redesign FREE
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <strong className="text-cyan-400 mr-2">Conversion-focused:</strong> 
                5–7 strategic sections to generate leads
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <strong className="text-cyan-400 mr-2">Special price:</strong> 
                Only $175/month (Only 7 clients left)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <strong className="text-cyan-400 mr-2">Mobile first:</strong> 
                Fully responsive design on all devices
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <strong className="text-cyan-400 mr-2">Ongoing support:</strong> 
                Monthly basic edits included
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="/Booking_Free_Call"
            className="inline-block bg-gradient-to-r bg-gray-200 hover:bg-white  text-black font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-emerald-500/20 hover:shadow-xl"
          >
            Get your website for $175/month
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
