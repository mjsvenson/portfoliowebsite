import Image from 'next/image';
import TabularUI from "./Images/TabularUI.jpg";
import BlockCollisionsImage from "./Images/BlockAndWallCollisions.jpg"
import EncodeImage from "./Images/encode.png";
import DecodeImage from "./Images/decode.png";

export default function Projects() {
    return (
    <div id="ProjectSection" className="bg-black border-white border-2 mx-4 sm:mx-8 md:mx-16 lg:mx-30 my-10 md:my-30 px-4 sm:px-8 py-8">
        <div id="title" className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-10">Projects</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://github.com/Yodude2002/Tabular" className="text-white border-2 border-white p-4 flex flex-col">
                <div className="flex justify-center mb-4">
                  <Image src={TabularUI} alt="Tabular UI Here" width={400} height={300} className="w-full max-w-[300px] h-auto"/>
                </div>
                <div className="text-2xl sm:text-3xl md:text-[36px] mb-2 text-center">Tabular</div>
                <p>I worked as a back-end engineer on Tabular! Tabular is a Chrome Extension that uses the Chrome API to organize tabs into a tree structure, reducing search time for users with 100+ tabs.
                <br /><br />
                On the project I collaborated with software engineers on architecture decisions and technical documentation, creating two product proposals with 3+ diagrams, and enhancing front-end UI and back-end design patterns.</p>
            </a>

            <a href="https://github.com/mjsvenson/BlockAndWallCollisions" className="text-white border-2 border-white p-4 flex flex-col">
                <div className="flex justify-center mb-4">
                  <Image src={BlockCollisionsImage} alt="Block and Wall Collisions" width={400} height={300} className="w-full max-w-[300px] h-auto"/>
                </div>
                <div className="text-2xl sm:text-3xl md:text-[36px] mb-2 text-center">Block and Wall Collisions</div>
                <p>This software simulates the collision of two blocks in addition to a wall with infinite mass and zero velocity with user inputted mass as well as user inputted velocity for the two blocks.
                <br /><br />
                This project was made to simulate the strange coincidence of pi showing up in block collisions when the first block is static with a mass of 1kg and the second block at any velocity and with a mass of any number that is a power of 100 (100^n: 1, 100, 10000, etc.).
                <br /><br />
                This program can also be used to simulate any combination of mass and velocity for the two blocks as well as counting the number of collisions that are present during the simulation.</p>
            </a>

            <a href="https://github.com/mjsvenson/EncryptionDecryptionIMG_CPP/tree/main" className="text-white border-2 border-white p-4 flex flex-col">
                <div className="flex flex-col items-center mb-4">
                  <Image src={EncodeImage} alt="Encode Image Here" width={400} height={300} className="w-full max-w-[300px] h-auto"/>
                  <p className="text-center text-sm mt-2">Example of image being encrypted with a 16 bit string</p>
                </div>
                <div className="text-2xl sm:text-3xl md:text-[36px] mb-2 text-center">Encrypt/Decrypt Image</div>
                <p>This software uses a Fibonacci Left Shift Register to encrypt and decrypt images using a 16 bit string.
                <br /><br />
                After the conversion of the 16 bit string, it is then used to edit each pixel of the picture to shift a certain direction until encryption or decryption is complete.</p>
                <div className="flex flex-col items-center mt-4">
                  <Image src={DecodeImage} alt="Decode Image Here" width={200} height={150} className="w-full max-w-[150px] h-auto"/>
                  <p className="text-center text-sm mt-2">Example of image being decrypted with the same 16 bit string</p>
                </div>
            </a>
        </div>
    </div>
    );
}