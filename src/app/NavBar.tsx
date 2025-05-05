import Image from 'next/image';
import Logo from "./logo.png";

export default function NavBar() {

  return (
    <div id="NavBar" className="bg-black h-[100]">
    <Image src={Logo} alt="Logo" width={100} height={100} className='float-left'/>
      <p className="text-white float-right my-[30] mx-[20]"> Certifications </p>
      <p className="text-white float-right my-[30] mx-[20]"> Projects </p>
      <p className="text-white float-right my-[30] mx-[20]"> Work Experience </p>
      <p className="text-white float-right my-[30] mx-[20]"> Education </p>

    </div>
  )
}
