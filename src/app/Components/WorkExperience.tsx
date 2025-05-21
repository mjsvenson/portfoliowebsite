import Image from "next/image";
import NECCLogo from "./Images/necc-logo-sq.png"
import JobsJrLogo from "./Images/jobsjr.jpg"
import UMLLogoJob from "./Images/UMLLogoJob.png"

export default function WorkExperience() {
    return (
    <div id ="WorkSection" className="bg-black border-white border-2 mx-30 my-30 h-200">
        
        <div id="WorkExperienceHeader" className="text-white m-auto text-center my-10 text-[56px]">Work Experience</div>
        
        <div id="WorkExperienceContainerNECC" className="mx-20 mb-10 float-left">
            <Image src={NECCLogo} alt="NECC Logo Here" width={150} className="float-left"/>
            <div id="WorkTitle" className="text-white float-left mx-10 text-[28px]">Software Engineer Intern</div>
            <div id="WorkResponsibilities" className="text-white float-left w-1/3">
            <ul className="list-inside list-disc">
                <li>In this position, I am engineering a format-dynamic employee information document using JavaScript to validate field entries and
                SQL to autofill participant information accurately.</li>
                <br />
                <li>I am also collaborating with cross-functional teams within the college to design, review, and refine document layouts,
                ensuring alignment with project goals.</li>
            </ul>
            </div>
            <div id="WorkLength" className="text-white float-left mx-26 text-[28px]">November 2024 - Present</div>
        </div>

        <div id="WorkExperienceContainerJobsJr" className="mx-20 mb-10 float-left">
            <Image src={JobsJrLogo} alt="JobsJr Logo Here" width={150} className="float-left"/>
            <div id="WorkTitle" className="text-white float-left mx-10 text-[28px]">Software Engineer Intern</div>
            <div id="WorkResponsibilities" className="text-white float-left w-1/3">
            <ul className="list-inside list-disc">
                <li>Developed and automated 25+ web scraping tools using Python libraries such as Selenium and BeautifulSoup.</li>
                <br />
                <li>Delivered clean, well-documented code, ensuring easy maintenance and scalability for future team use.</li>
            </ul>
            </div>
            <div id="WorkLength" className="text-white float-left mx-20 text-[28px]">June 2024 - September 2024</div>
        </div>

        <div id="WorkExperienceContainerUML" className="mx-20 mb-10 float-left">
            <Image src={UMLLogoJob} alt="UMLJobLogo Here" width={150} className="float-left bg-white"/>
            <div id="WorkTitle" className="text-white float-left mx-11 text-[28px]">Professor's Assistant</div>
            <div id="WorkResponsibilities" className="text-white float-left w-1/3">
            <ul className="list-inside list-disc">
                <li>Mentored 50+ students on Data Structure and Algorithms projects through office hours to ensure compliance
                with requirements.</li>
                <br />
                <li>Debugged student code and gave feedback on 12 C++ assignments, using unit tests and code optimization.</li>
            </ul>
            </div>
            <div id="WorkLength" className="text-white float-left mx-20 text-[28px]">September 2023 - January 2024</div>
        </div>
    </div>
    );
}