import Logo from "./logo.png";

export default function Home() {
  console.log(Logo);

  return (
    <div id="WebPage">
      <div id="NavBar" className="bg-black h-[100]">
        <img src="./logo.png" />
      <p className="text-white"> this is where I would put the navbar</p>
    </div>
    <p> OK I need to make a general layout for my portfolio....</p>
    <div id="FrontPageIntro">
      <p>This is where I would put the intro page.</p>
    </div>
    </div>
  );
}
