import './globals.css';
import NavBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';


export default function Home() {

  return (
    <div id="WebPage">
     <NavBar />
     <Intro />
     <AboutMe />
    </div>
  );
}
