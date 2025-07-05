"use client"
import Navbar from '@/Components/NavBar'
import React, { useEffect } from 'react'

const Booking = () => {
  useEffect(() => {
    // Cargar el script de Calendly dinámicamente
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function para remover el script cuando el componente se desmonte
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-8">
          <div 
            className="calendly-inline-widget bg-black" 
            data-url="https://calendly.com/javierjimenezmk/lets-talk-about-your-business"
            style={{ 
              minWidth: '320px', 
              height: '700px',
              backgroundColor: 'black'
            }}
          ></div>
        </div>
      </section>
    </>
  )
}

export default Booking