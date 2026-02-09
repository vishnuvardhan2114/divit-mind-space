export function HeroSection() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 lg:px-0 flex flex-col justify-center items-center">
          {/* Main Heading */}
          <div className={`space-y-4 lg:space-y-4`}>
            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.0rem] font-semibold text-[#2F3E33] tracking-tight"
            >
              Empowering every
            </h1>

            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.0rem] font-semibold text-[#2F3E33] tracking-tight"
            >
               neurodivergent 
            </h1>

            <h1
              className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.0rem] font-semibold text-[#2F3E33] tracking-tight"
            >
              childs to thrive
            </h1>
          </div>

          <p
            className="mt-10  text-[#2F3E33] text-lg sm:text-xl lg:text-2xl font-normal tracking-wide"
          >
            Our mission from the start.
          </p>
      </div>
    </section>
  );
}
