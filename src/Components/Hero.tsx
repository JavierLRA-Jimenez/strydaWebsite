import React from 'react'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="relative bg-black text-gray-50 py-24 px-6 text-center overflow-hidden">

      {/* Indicador de disponibilidad pulsante */}
      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center border border-green-500 rounded-full px-4 py-1 mb-6 animate-pulse">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-ping"></div>
          <span className="text-gray-50 font-medium text-sm">
             Only 2 website/Design Spots Available this Month
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-10 mx-24 ">
          High-Impact Web Design for SaaS That Converts, Not Just Looks Good
        </h1>

        <Link href="/Booking_Free_Call" className="relative bg-gray-200 hover:bg-white cursor-pointer text-black px-6 py-2.5 rounded-full font-bold">
          <span >Book an Intro Call</span>
        </Link>
      </div>

      {/* Testimonios */}
      <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-sm text-neutral-300 z-10">
        {[
          {
            quote: "Delighted with the work, it's exactly what I wanted for my personal brand.",
            name: "Lez.flp.",
          },
          {
            quote: "It helped me elevate my website to a level fully focused on conversion and professional quality.",
            name: "Byakko Software.",
          },
          {
            quote: "I never thought having such a well-made website could be so easy. Now my clients can find me, and it shows in my sales.",
            name: "Sarah W.",
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <div className="flex justify-center gap-1 mb-2 text-gray-50">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gray-50" />
              ))}
            </div>
            <p className="italic text-gray-500">“{testimonial.quote}”</p>
            <p className="mt-3 text-gray-500 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero