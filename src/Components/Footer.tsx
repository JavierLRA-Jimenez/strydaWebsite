"use client"
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Sección CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-white bg-clip-text text-transparent">
            Let&apos;s Build Something
            <br />
            <span className="text-white">People</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
              Remember
            </span>
          </h2>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <Link
              href="/Booking_Free_Call"
              className="px-8 py-4 bg-gray-200 hover:bg-white text-black rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2 group"
            >
              Book an Intro Call
            </Link>

            
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-800 my-12" />

        {/* Información inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">© Stryda Design {new Date().getFullYear()}</span>
            <div className="w-px h-6 bg-gray-800" />
            <Link
              href="mailto:softwarebyakko@gmail.com"
              className="hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@stryda.design
            </Link>
          </div>

          <div className="flex gap-6">
            {['Instagram'].map((platform) => (
              <Link
                key={platform}
                href="https://www.instagram.com/stryda_design/"
                className="hover:text-purple-400 transition-colors capitalize"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;