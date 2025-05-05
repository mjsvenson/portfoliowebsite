import Image from 'next/image';
import Logo from "./logo.png";

export default function NavBar() {

  return (
    <div id="NavBar" className="bg-black h-[100]">
    <Image src={Logo} alt="Logo" width={100} height={100} />
      <p className="text-white"> this is where I would put the navbar</p>
    </div>
  )
}
