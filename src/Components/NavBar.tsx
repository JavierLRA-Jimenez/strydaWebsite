import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Logo - left */}
        <Link href="/" className="flex items-center space-x-2 group">
          <svg
            className="w-8 h-8 text-white group-hover:rotate-180 transition-transform"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L30 16M16 30L2 16M16 2L2 16M16 30L30 16M2 16L16 16M30 16L16 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-2xl font-bold text-white">
            STRYDA.
          </span>
        </Link>

        {/* Center - links */}
        <div className="hidden md:flex space-x-8 justify-center flex-1 max-w-lg">
          <Link href="/Pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/All_Work" className="text-gray-300 hover:text-white transition-colors">
            View Work
          </Link>
        </div>

        {/* Right - button */}
        <Link href="/Booking_Free_Call" className="relative bg-gray-200 hover:bg-white cursor-pointer text-black px-10 md:px-6 py-2.5 rounded-full font-bold">
          <span>Book an Intro Call</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
