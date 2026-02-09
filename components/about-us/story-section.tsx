
export function StorySection() {
  return (
    <section className="relative py-24 lg:py-22 bg-[#FDFBF7] overflow-hidden" id="story">
      <div className="px-4 md:px-6">
        <div
        className="flex flex-col gap-4 max-w-6xl"
        >
          {/* First Paragraph */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#A8B5AC] leading-[1.2] tracking-tight">
            Our journey began with a{" "}
            <span className="text-[#2F3E33] font-bold">simple goal</span>
            to support children who{" "}
            <span className="text-[#2F3E33] font-bold">
              learn differently.
            </span>
          </p>

          {/* Second Paragraph */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#A8B5AC] leading-[1.2] tracking-tight">
            Today, we provide{" "}
            <span className="text-[#2F3E33] font-bold">
              personalized assessments, therapy,
            </span>{" "}
            and{" "}
            <span className="text-[#2F3E33] font-bold">
              learning programs
            </span>{" "}
            that help every child grow with{" "}
            <span className="text-[#2F3E33] font-bold">
              confidence and independence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
