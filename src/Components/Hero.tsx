import React from 'react'
import { Star } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-6 text-center overflow-hidden">
      {/* Fondo dinámico con efecto de partículas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Indicador de disponibilidad pulsante */}
      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center bg-green-900/30 border border-green-500/50 rounded-full px-4 py-1 mb-6 animate-pulse">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-ping"></div>
          <span className="text-green-400 font-medium text-sm">
             Only 5 website spots available this month
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          From Zero to a High-Impact Website, Designed to Convert in Just <span className="text-cyan-400">7 days</span>.
        </h1>

        <p className="text-lg md:text-lg mb-8 text-neutral-300 max-w-3xl mx-auto">
          For just <strong className="text-cyan-400">$175/month</strong> (special offer), I include domain + hosting + mobile design + basic monthly updates + a $1500 Figma redesign for free after 6 months + SSL.
        </p>

        <Link
          href="/Booking_Free_Call"
className="
    relative inline-block 
    bg-gradient-to-r from-blue-600 to-blue-400 
    text-white font-bold py-4 px-8 rounded-full 
    transition-all duration-300 
    shadow-lg shadow-cyan-500/20 
    hover:from-blue-600 hover:to-blue-500 
    hover:shadow-xl 
    hover:scale-105 hover:-translate-y-1
    cursor-pointer hover:cursor-grab
    z-10
  "        >
          Let's Start Your Project Together
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
          <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <div className="flex justify-center gap-1 mb-2 text-cyan-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cyan-400" />
              ))}
            </div>
            <p className="italic">“{testimonial.quote}”</p>
            <p className="mt-3 text-white font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero