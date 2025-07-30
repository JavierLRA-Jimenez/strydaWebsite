"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SupaBase2 from "../assets/SupaBase V2.png"
import OctoMails from "../assets/Octomail.png"
import Heroku from "../assets/Heroku Design.png"
import Gym from "../assets/Gym.png"
import Crypto from "../assets/TWITTER crypto.png"
import House from "../assets/Rent House.png"
import SaaS from "../assets/Twitter post MOBILE.png"
import Twitter from "../assets/TWITTER.png"

const projects = [
  { title: 'Gym Product Website', image: Gym },
  { title: 'ReDesign SupaBase 2', image: SupaBase2 },
  { title: 'OctoMails', image: OctoMails },
  { title: 'Rent House Website', image: House },
  { title: 'ReDesign Heroku', image: Heroku },
  { title: 'Review SaaS', image: SaaS },
  { title: 'Mobile Design for SaaS', image: Twitter },
  { title: 'Crypto Website', image: Crypto },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <section className="bg-black py-20 px-6 flex justify-center">
      <div className="relative w-[90%] max-w-5xl h-[600px] rounded-2xl overflow-hidden shadow-xl border border-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-opacity duration-500"
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default Portfolio;
