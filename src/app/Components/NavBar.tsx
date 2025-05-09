
import Image from 'next/image';
import Logo from "./Images/logo.png";

export default function NavBar() {
  return (
    <div id="NavBar" className="absolute mask-b-from-40% mask-b-to-90% bg-black w-[1910]">
    <Image src={Logo} alt="Logo" width={100} height={100} className='float-left'/>
      <p className="text-white float-right my-[30] mx-[20]"> Certifications </p>
      <p className="text-white float-right my-[30] mx-[20]"> Projects </p>
      <p className="text-white float-right my-[30] mx-[20]"> Work Experience </p>
      <p className="text-white float-right my-[30] mx-[20]"> Education </p>

    </div>
  )
}
