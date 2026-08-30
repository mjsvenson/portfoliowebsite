export default function Intro() {
  return (
    <div id="Intro" className="relative w-full h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-white text-center px-6 py-3
                     text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px]
                     bg-[#111619] mask-b-from-70% mask-t-from-70%">
        Matthew Svenson
      </p>
    </div>
  );
}