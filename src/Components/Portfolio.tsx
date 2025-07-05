"use client"
import React from 'react';
import Image from 'next/image';
import SupaBase from "../assets/SupaBase V1.png"
import SupaBase2 from "../assets/SupaBase V2.png"
import OctoMails from "../assets/Octomail.png"
import Pizza from "../assets/Pizza Section.png"
import Heroku from "../assets/Heroku Design.png"
import Lez from "../assets/Lez.png"
import Sushi from "../assets/Sushi.png"
import MarleyDark from "../assets/Coffe Store Dark.png"

const projects = [
  { 
    title: 'ReDesign SupaBase', 
    image: SupaBase,
  },
  { 
    title: 'ReDesign SupaBase 2', 
    image: SupaBase2,
  },
  { 
    title: 'OctoMails', 
    image: OctoMails,
  },
  { 
    title: 'Pizzeria', 
    image: Pizza,
  },
  { 
    title: 'ReDesign Heroku', 
    image: Heroku,
  },
  { 
    title: 'Lez Official Page', 
    image: Lez,
  },
  { 
    title: 'ReDesign MarleyCoffee', 
    image: MarleyDark,
  },
  { 
    title: 'Sushi Business', 
    image: Sushi,
  },
];

const Portfolio = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden px-6">

      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max animate-scroll gap-6 group-hover:[animation-play-state:paused]">
          {[...projects, ...projects].map((project, i) => (
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-90 min-w-[500px] md:min-w-[600px] h-[500px] bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 hover:border-gray-800 transition-all group/item hover:scale-[1.02]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top opacity-90 group-hover/item:opacity-100 transition-opacity"
                  quality={100}
                  priority={i < 2}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-gray-50">{project.title}</h3>
              </div>
              
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio;