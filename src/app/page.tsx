import Image from 'next/image';
import Logo from "./logo.png";
import NavBar from './NavBar';
import Intro from './Intro';

export default function Home() {

  return (
    <div id="WebPage">
     <NavBar />
     <Intro />
    </div>
  );
}
