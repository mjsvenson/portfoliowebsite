
import Image from 'next/image';
import Logo from "./Images/logo.png";

export default function NavBar() {
  return (
    <div id="NavBar" className="fixed mask-b-from-40% mask-b-to-90% bg-black w-[1910] z-1">
    <a href='#Intro'><Image src={Logo} alt="Logo" width={100} height={100} className='float-left'/></a>
      <a href="#ProjectSection" className="text-white float-right my-[30] mx-[20]"> Projects </a>
      <a href="#WorkSection" className="text-white float-right my-[30] mx-[20]"> Work Experience </a>
      <a href="#EducationSection" className="text-white float-right my-[30] mx-[20]"> Education </a>

    </div>
  )
}
