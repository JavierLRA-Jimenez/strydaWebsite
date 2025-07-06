import avatar1 from "@/assets/lezprofilepic.png";
import avatar2 from "@/assets/byakkoprofilepic.png";
import avatar3 from "@/assets/girlprofilepic.png";
import Image from "next/image";



const testimonials = [
  {
    name: "Lez.flp",
    role: "DJ - Music Producer",
    text: "I'm thrilled with the work on the website. Everything was done according to what I requested and the style I was looking for in my brand. 5/5.",
    avatar: avatar1,
  },
  {
    name: "Byakko Software",
    role: "OctoMail Founder",
    text: "Very satisfied working with Stryda. It really changed the way visitors see my product, helping me get more organic customers.",
    avatar: avatar2,
  },
  {
    name: "Sarah W.",
    role: "Local Business Owner",
    text: "I always thought having a website was expensive and complicated, but everything was easy from the beginning. I felt supported every step of the way, and now I have a professional website that represents my business just the way I wanted.",
    avatar: avatar3,
  },
];


const Testimonials = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Hear It Straight
          <br />
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">from Our Clients</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-16 items-stretch">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-black/50 rounded-xl border border-gray-800 hover:border-gray-600 transition-all max-w-md mx-auto"
            >
              <Image
                src={testimonial.avatar.src}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-gray-300">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-400 leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
