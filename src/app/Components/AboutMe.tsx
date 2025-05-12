
import Image from 'next/image';
import Minecraft from "./Images/minecraft.png";
import JavaLogo from "./Images/Java-Logo.png";
import BigThree from "./Images/big3web.jpg"

// Change text font

export default function AboutMe() {

  return (
    <div id="AboutMe">
        <div id="AboutMebg" className="bg-black border-white border-2 mx-30 h-100">
            <div id="MinecraftImage" className="absolute my-5 mx-80">
              <Image src={Minecraft} alt="Minecraft image here" width={150} height={100} className='float-left border-white border-2'/>
            </div>
            <div id="Big3Images" className="absolute my-10 ml-290">
              <Image src={BigThree} alt="HTML/CSS/JavaScript image here" width={200} height={100} className='float-left border-white border-2'/>
            </div>
            <div id="AboutMeContainer" className="mt-25 mx-30">
                <div id="AboutMeHeader" className="text-white m-auto text-center text-[56px]">About me</div>
                <div id="AboutMeText" className="text-white m-auto text-center">
                  Hello there! My name is Matthew Svenson and this is my Portfolio website! I was born in Melrose Massachusetts on April 4th 2002. 
                  Ever since middle school I have had a passion for Computer Science, during any downtime I had in school I would mess around with HTML learning
                  how to make basic websites and outside of school I was learning how to mod minecraft and learning how to port forward to create my own minecraft server.
                  My passion was put into my classes when I had gone into Computing classes within my highschool where I first encountered object oriented programming 
                  with the class being entirely in Java. I completed that class and got a 4 on my AP Computer Science exam. 
                </div>
            </div>
            <div id="JavaImage" className="absolute ml-70">
              <Image src={JavaLogo} alt="Java logo here" width={150} height={100} className='float-left border-white border-2'/>
            </div>
        </div>
    </div>
  );
}