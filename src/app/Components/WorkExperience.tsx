import Image from "next/image";
import NECCLogo from "./Images/necc-logo-sq.png"
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
            <div id="WorkLength" className="text-white float-left mx-20 text-[32px]">November 2024 - Present</div>
        </div>

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
            <div id="WorkLength" className="text-white float-left mx-20 text-[32px]">November 2024 - Present</div>
        </div>

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
            <div id="WorkLength" className="text-white float-left mx-20 text-[32px]">November 2024 - Present</div>
        </div>
    </div>
    );
}