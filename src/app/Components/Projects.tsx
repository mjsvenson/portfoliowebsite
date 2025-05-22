import Image from 'next/image';
import TabularUI from "./Images/TabularUI.jpg";
export default function Projects() {
    return (
    <div id ="ProjectSection" className="bg-black border-white border-2 mx-30 my-30 h-300">
         <div id="title" className="text-white m-auto my-10 text-center text-[56px]"> Projects </div>
        <div id="card1" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
            <div id="imagecontainer" className="mx-36 my-10"><Image src={TabularUI} height={400} alt="Tabular UI Here" /></div>
            <div id="cardTitle" className="text-white float-left mx-45 text-[44px]">Tabular</div>
            <div id="cardDescription" className='mx-10'>I worked as a back-end engineer Tabular! Tabular is a Chrome Extension
                 that uses the Chrome API to organize tabs into a tree structure, reducing search time for users with 100+ tabs.
                 <br />
                 <br />
                 On the project I collaborated with software engineers on architecture decisions and technical documentation, 
                 creating two product proposals with 3+ diagrams, and enhancing front-end UI and back-end design patterns.  </div>
        </div> 
        <div id="card2" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
         <div id="imagecontainer" className="mx-36 my-10"><Image src={TabularUI} height={400} alt="Tabular UI Here" /></div>
            <div id="cardTitle" className="text-white float-left mx-45 text-[44px]">Tabular</div>
            <div id="cardDescription" className='mx-10'>I worked as a back-end engineer Tabular! Tabular is a Chrome Extension
                 that uses the Chrome API to organize tabs into a tree structure, reducing search time for users with 100+ tabs.
                 <br />
                 <br />
                 On the project I collaborated with software engineers on architecture decisions and technical documentation, 
                 creating two product proposals with 3+ diagrams, and enhancing front-end UI and back-end design patterns.  </div>
        </div>
        <div id="card3" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
           <div id="imagecontainer" className="mx-36 my-10"><Image src={TabularUI} height={400} alt="Tabular UI Here" /></div>
            <div id="cardTitle" className="text-white float-left mx-45 text-[44px]">Tabular</div>
            <div id="cardDescription" className='mx-10'>I worked as a back-end engineer Tabular! Tabular is a Chrome Extension
                 that uses the Chrome API to organize tabs into a tree structure, reducing search time for users with 100+ tabs.
                 <br />
                 <br />
                 On the project I collaborated with software engineers on architecture decisions and technical documentation, 
                 creating two product proposals with 3+ diagrams, and enhancing front-end UI and back-end design patterns.  </div>
        </div>


    </div>
    );
}