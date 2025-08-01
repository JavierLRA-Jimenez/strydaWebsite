"use client"
import React from 'react';
import Image from 'next/image';
import SupaBase from "../../assets/SupaBase V1.png"
import Gym from "../../assets/Gym.png"
import Pill from "../../assets/PillStore.png"
import SupaBase2 from "../../assets/SupaBase V2.png"
import OctoMails from "../../assets/Octomail.png"
import Lez from "../../assets/Lez.png"
import MarleyDark from "../../assets/Coffe Store Dark.png"
import Pizza from "../../assets/Pizza Section.png"
import Heroku from "../../assets/Heroku Design.png"
import Sushi from "../../assets/Sushi.png"
import Navbar from '@/Components/NavBar';
import Crypto from "../../assets/TWITTER crypto.png"
import House from "../../assets/Rent House.png"
import SaaS from "../../assets/Twitter post MOBILE.png"
import Twitter from "../../assets/TWITTER.png"

// Agrega tus imágenes en la carpeta public/images
const projects = [
  { 
    title: 'ReDesign SupaBase', 
    image: SupaBase,
  },
    { 
    title: 'Crypto Website', 
    image: Crypto,
  },
    { 
    title: 'Review SaaS', 
    image: SaaS,
  },
  { 
    title: 'Mobile Design for SaaS', 
    image: Twitter,
  },
    { 
    title: 'Rent House Website', 
    image: House,
  },
    { 
    title: 'Nutrition Pill Store', 
    image: Pill,
  },
  { 
    title: 'ReDesign SupaBase 2', 
    image: SupaBase2,
  },
    { 
    title: 'Gym Product Website', 
    image: Gym,
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
      <Navbar/>


      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max animate-scroll gap-6 group-hover:[animation-play-state:paused]">
          {[...projects, ...projects].map((project, i) => (
            <a
              key={i}
              target="_blank"
              className="relative w-80 min-w-[1000px] h-[600px] bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 hover:border-white transition-all group/item"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="opacity-90 group-hover/item:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white neon-text">
                  {project.title}
                </h3>
              </div>
              
            </a>
          ))}
        </div>
      </div>

      {/* Estilos animación */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Portfolio;