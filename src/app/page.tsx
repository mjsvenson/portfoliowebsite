import './globals.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import WorkExperience from './Components/WorkExperience'
import Projects from './Components/Projects'
import Certifications from './Components/Certifications'
import Footer from './Components/Footer'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {

  return (
     <div id="WebPage" lang="en" className={anton.className}>
      <NavBar />
      <Intro />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Footer />
     </div>
  );
}
