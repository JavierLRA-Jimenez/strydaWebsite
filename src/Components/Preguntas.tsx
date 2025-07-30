const FAQSection = () => {
  const faqs = [
    {
      question: "Who Do You Work With?",
      answer: "We specialize in SaaS, startups, and small to medium businesses, but we're open to all industries."
    },
    {
      question: "Do You Offer Refunds?",
      answer: "Due to the high quality and time investment of our work, we do not offer refunds."
    },
    {
      question: "When Can You Start?",
      answer: "We start projects within 24 hours of confirmation."
    },
    {
      question: "How Do We Communicate?",
      answer: "Any communication channel you prefer, including scheduled video calls."
    },
    {
      question: "Do You Offer Ongoing Support?",
      answer: "Yes, we provide ongoing support and updates as your business grows."
    }
  ];

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
          Everything You Want to Know
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group border border-gray-800 rounded-xl p-6 bg-black
                cursor-pointer neon-glow-faq"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-gray-100">{faq.question}</h3>
                <div className="text-white transform group-hover:rotate-180 transition">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-gray-400 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all 
                duration-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
