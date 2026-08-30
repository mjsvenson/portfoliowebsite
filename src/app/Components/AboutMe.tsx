import Image from 'next/image';
import Minecraft from "./Images/minecraft.png";
import JavaLogo from "./Images/Java-Logo.png";
import BigThree from "./Images/big3web.jpg"

export default function AboutMe() {
  return (
    <div id="AboutMe" className="px-4 sm:px-8 md:px-16 lg:px-30">
      <div id="AboutMebg" className="bg-black border-white border-2 py-8 px-4 sm:px-8">
        <div id="AboutMeHeader" className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-8">
          About me
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="flex flex-row md:flex-col gap-4 shrink-0">
            <Image src={Minecraft} alt="Minecraft image here" width={150} height={100}
              className="border-white border-2 w-24 sm:w-32 md:w-[150px] h-auto"/>
            <Image src={JavaLogo} alt="Java logo here" width={150} height={100}
              className="border-white border-2 w-24 sm:w-32 md:w-[150px] h-auto"/>
          </div>

          <div id="AboutMeText" className="text-white text-center md:text-left">
            Hello there! My name is Matthew Svenson and this is my Portfolio website! I was born in Melrose Massachusetts on April 4th 2002.
            Ever since middle school I have had a passion for Computer Science, during any downtime I had in school I would mess around with HTML learning
            how to make basic websites and outside of school I was learning how to mod minecraft and learning how to port forward to create my own minecraft server.
            My passion was put into my classes when I had gone into Computing classes within my highschool where I first encountered object oriented programming
            with the class being entirely in Java. I completed that class and got a 4 on my AP Computer Science exam.
          </div>

          <div className="shrink-0">
            <Image src={BigThree} alt="HTML/CSS/JavaScript image here" width={200} height={100}
              className="border-white border-2 w-32 sm:w-40 md:w-[200px] h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
}