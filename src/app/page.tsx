import './globals.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';



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
