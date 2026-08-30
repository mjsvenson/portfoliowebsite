import Image from 'next/image';
import UMLLogo from "./Images/UMLLogo.jpg"
import ACMLogo from "./Images/acmlogo.png"

export default function Education() {
    return (
    <div id="EducationSection" className="bg-black border-white border-2 mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-10 md:my-30 px-4 sm:px-8 py-8">
        <div id="title" className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-8">Education</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  <a href='https://www.uml.edu/' target="_blank">
                    <Image src={UMLLogo} alt="UML Logo here" width={200} height={100}
                      className="border-white border-2 w-40 sm:w-48 md:w-[200px] h-auto"/>
                  </a>
                </div>
                <p>I graduated from University of Massachusetts, Lowell, with a degree in Computer Science and a minor in Mathematics with a 3.4 GPA</p>
            </div>

            <div className="text-center">
                <p>Some relevant coursework I have done has been:</p>
                <ul className="mt-4 space-y-1">
                  <li>Data Structures and Algorithms</li>
                  <li>Software Engineering I and II</li>
                  <li>Probability and Statistics</li>
                  <li>Computer Architecture</li>
                  <li>Databases</li>
                </ul>
            </div>

            <div className="text-center">
                <p>During my under grad, I was involved with the ACM Chapter of our college.</p>
                <a href='https://www.acm.org/' target="_blank" className="inline-block my-4">
                  <Image src={ACMLogo} alt="ACM Logo here" width={100} height={100} className="mx-auto w-20 h-20"/>
                </a>
                <p>I was the Treasurer at our ACM Chapter for the year of 2024 which included helping with budget, planning, and execution of planned events</p>
            </div>
        </div>
    </div>
    );
}