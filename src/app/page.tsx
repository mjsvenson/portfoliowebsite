import './globals.css';
import NavBar from './NavBar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Education from './Education';



export default function Home() {

  return (
    <div id="WebPage">
     <NavBar />
     <Intro />
     <AboutMe />
     <Education />
    </div>
  );
}
