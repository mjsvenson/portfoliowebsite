export default function Footer() {
    return (
    <div id ="Footer">
        <div id="FooterContainer" className="relative w-full text-center text-white p-5"> 
            <div id="leftSide" className="bottom-0 left-0 text-left w-1/4">
                Matthew Svenson <br/>
            </div>
            <div id="rightSide" className="absolute bottom-0 right-0 text-right w-1/4 p-5">
                <a href="mailto:matthewjsvenson@gmail.com"> matthewjsvenson@gmail.com </a> <br/>
                <a href="https://www.linkedin.com/in/matthew-svenson/" className="text-sky-500">Linkedin</a>
            </div>
        </div>
    </div>
    );
}