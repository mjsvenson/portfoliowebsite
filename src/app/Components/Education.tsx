
import Image from 'next/image';
import UMLLogo from "./Images/UMLLogo.jpg"

export default function Education() {
    return (
    <div id ="EducationSection" className="bg-black border-white border-2 mx-30 my-30 h-100">
        <div id="title" className="text-white m-auto my-10 text-center text-[56px]"> Education </div>
        <div id="column1" className="text-white bg-black w-1/3 h-4/7 float-left">
            <div id="imageContainer" className='px-30'><Image src={UMLLogo} alt="UML Logo here" width={200} height={100} className='float-left border-white border-2'/></div>
            <p className='my-30'>I graduated from University of Massachusetts, Lowell, with a degree in Computer Science and a minor in Mathematics</p>
        </div> 
        <div id="column2" className="text-white bg-black w-1/3 h-4/7 float-left">
            column2
        </div>
        <div id="column3" className="text-white bg-black w-1/3 h-4/7 float-left">
            column3
        </div>


    </div>
    );
}