
export default function Intro() {
    return (
     <div id="Intro">
       {/* Video Background */}
       <video
          autoPlay
          muted
          loop
          className=""
        >
          <source src="/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-white text-center text-[112px] bg-[#111619] 
                     mask-b-from-70% mask-t-from-70%">Matthew Svenson</p>
        </div>
    );
}