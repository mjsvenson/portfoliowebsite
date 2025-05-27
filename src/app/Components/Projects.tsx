import Image from 'next/image';
import TabularUI from "./Images/TabularUI.jpg";
import BlockCollisionsImage from "./Images/BlockAndWallCollisions.jpg"
import EncodeImage from "./Images/encode.png";
import DecodeImage from "./Images/decode.png";

export default function Projects() {
    return (
    <div id ="ProjectSection" className="bg-black border-white border-2 mx-30 my-30 h-300">
         <div id="title" className="text-white m-auto my-10 text-center text-[56px]"> Projects </div>
        <div id="card1" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
            <a href='https://github.com/Yodude2002/Tabular'>
            <div id="imagecontainer" className="mx-36 my-10"><Image src={TabularUI} height={400} alt="Tabular UI Here" /></div>
            <div id="cardTitle" className="text-white float-left mx-45 text-[44px]">Tabular</div>
            </a>
            <div id="cardDescription" className='mx-10'>I worked as a back-end engineer Tabular! Tabular is a Chrome Extension
                 that uses the Chrome API to organize tabs into a tree structure, reducing search time for users with 100+ tabs.
                 <br />
                 <br />
                 On the project I collaborated with software engineers on architecture decisions and technical documentation, 
                 creating two product proposals with 3+ diagrams, and enhancing front-end UI and back-end design patterns.  </div>
        </div> 
        <div id="card2" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
        <a href='https://github.com/mjsvenson/BlockAndWallCollisions'>
         <div id="imagecontainer" className="mx-10 my-10"><Image src={BlockCollisionsImage} height={400} alt="Tabular UI Here" /></div>
            <div id="cardTitle" className="text-white float-left mx-25 text-[44px] text-center">Block and Wall Collisions</div></a>
            <div id="cardDescription" className='mx-10'>
                This software simulates the collision of two blocks in addition to a wall with infinite mass and zero velocity with user inputted
                mass as well as user inputted velocity for the two blocks.<br/> <br/>
                This project was made to simulate the strange coincidence of pi showing
                up in block collisions when the first block is static with a mass of 1kg and the second block at any velocity and with a mass of
                any number that is a power of 100 (100^n: 1, 100, 10000, etc.). <br/> <br/> 
                This program can also be used to simulate any combination of 
                mass and velocity for the two blocks as well as counting the number of collisions that are present during the simulation
                 <br />
                 <br />
                </div>
        </div>
        <div id="card3" className="text-white bg-black mx-5 w-[500px] h-5/7 float-left border-2">
           <a href='https://github.com/mjsvenson/EncryptionDecryptionIMG_CPP/tree/main'>
           <div id="imagecontainer" className="mx-10 my-10"><Image src={EncodeImage} height={400} alt="Encode Image Here" />
           <center>Example of image being encrypted with a 16 bit string</center></div>
            <div id="cardTitle" className="text-white float-left mx-20 text-[44px] text-center">Encrypt/Decrypt Image </div> </a>
            <div id="cardDescription" className='mx-10'>This software uses a Fibonacci Left Shift Register to encrypt and decrypt images using a 16 bit string.
                 <br />
                 <br />
                 After the conversion of the 16 bit string, it is then used to edit each pixel of the picture to shift a certain direction until encryption or decryption is complete
                </div>
                <div id="imagecontainer" className="mx-27 m-10"><Image src={DecodeImage} height={150} alt="Encode Image Here" />
                <center>Example of image being decrypted with the same 16 bit string</center></div>

        </div>


    </div>
    );
}