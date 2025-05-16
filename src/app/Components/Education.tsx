
import Image from 'next/image';
import UMLLogo from "./Images/UMLLogo.jpg"
import ACMLogo from "./Images/acmlogo.png"

export default function Education() {
    return (
    <div id ="EducationSection" className="bg-black border-white border-2 mx-30 my-30 h-100">
        <div id="title" className="text-white m-auto my-10 text-center text-[56px]"> Education </div>
        <div id="column1" className="text-white bg-black w-1/3 h-4/7 float-left">
            <div id="imageContainer" className='mx-30'><Image src={UMLLogo} alt="UML Logo here" width={200} height={100} className='float-left border-white border-2'/></div>
            <div className='my-30 mx-10'>
                <br />
                I graduated from University of Massachusetts, Lowell, with a degree in Computer Science and a minor in Mathematics with a 3.4 GPA
            </div>
            
        </div> 
        <div id="column2" className="text-white bg-black w-1/3 h-4/7 float-left">
            <center>Some relevant coursework I have done has been:<br />
            <br />
            - Data Structures and Algorithms <br />
            - Software Engineering I and II <br /> 
            - Probability and Statistics <br />
            - Computer Architecture <br /> 
            - Databases <br />

            </center>
        </div>
        <div id="column3" className="text-white bg-black w-1/3 h-4/7 float-left">
           <center>During my under grad, I was involved with the ACM Chapter of our college.
            <br />
            <br />
            <Image src={ACMLogo} alt="ACM Logo here" width={100} height={100} className='mx-20 my'/>
            <br />
            I was the Treasurer at our ACM Chapter for the year of 2024 which included helping with budget, planning, and execution of planned events
            </center>
        </div>


    </div>
    );
}