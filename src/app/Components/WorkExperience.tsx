import Image, { StaticImageData } from "next/image";
import NECCLogo from "./Images/necc-logo-sq.png"
import JobsJrLogo from "./Images/jobsjr.jpg"
import UMLLogoJob from "./Images/UMLLogoJob.png"

function WorkCard({ logo, href, alt, title, bullets, length, whiteBg }: {
  logo: StaticImageData; href: string; alt: string; title: string; bullets: string[]; length: string; whiteBg?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-10 text-white">
      <a href={href} target="_blank" className="shrink-0">
        <Image src={logo} alt={alt} width={150} height={150}
          className={`w-24 sm:w-32 md:w-[150px] h-auto ${whiteBg ? 'bg-white' : ''}`}/>
      </a>
      <div className="flex-1 text-center md:text-left">
        <div className="text-xl sm:text-2xl md:text-[28px] mb-2">{title}</div>
        <ul className="list-inside list-disc text-left inline-block sm:block space-y-2">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
      <div className="text-lg sm:text-xl md:text-[28px] text-center md:text-right shrink-0">{length}</div>
    </div>
  );
}

export default function WorkExperience() {
    return (
    <div id="WorkSection" className="bg-black border-white border-2 mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-10 md:my-30 px-4 sm:px-8 py-8">
        <div id="WorkExperienceHeader" className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-10">Work Experience</div>

        <WorkCard
          logo={NECCLogo} href="https://www.necc.mass.edu/" alt="NECC Logo Here"
          title="Software Engineer Intern" length="November 2024 - Present"
          bullets={[
            "In this position, I am engineering a format-dynamic employee information document using JavaScript to validate field entries and SQL to autofill participant information accurately.",
            "I am also collaborating with cross-functional teams within the college to design, review, and refine document layouts, ensuring alignment with project goals."
          ]}
        />
        <WorkCard
          logo={JobsJrLogo} href="https://www.linkedin.com/company/jobs-jr/posts/?feedView=all" alt="JobsJr Logo Here"
          title="Software Engineer Intern" length="June 2024 - September 2024"
          bullets={[
            "Developed and automated 25+ web scraping tools using Python libraries such as Selenium and BeautifulSoup.",
            "Delivered clean, well-documented code, ensuring easy maintenance and scalability for future team use."
          ]}
        />
        <WorkCard
          logo={UMLLogoJob} href="https://www.uml.edu/" alt="UMLJobLogo Here"
          title="Professors Assistant" length="September 2023 - January 2024" whiteBg
          bullets={[
            "Mentored 50+ students on Data Structure and Algorithms projects through office hours to ensure compliance with requirements.",
            "Debugged student code and gave feedback on 12 C++ assignments, using unit tests and code optimization."
          ]}
        />
    </div>
    );
}