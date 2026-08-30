export default function Footer() {
    return (
    <div id="Footer" className="w-full text-white py-6 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 text-center sm:text-left">
            <div>
                <a href="https://www.linkedin.com/in/matthew-svenson/" className="text-sky-500">Linkedin</a> <br/>
                <a href="https://github.com/mjsvenson" className="text-sky-500">Github</a>
            </div>
            <div className="sm:text-right">
                <a href="mailto:matthewjsvenson@gmail.com" className="text-sky-500">matthewjsvenson@gmail.com</a> <br/>
                <a href="https://www.linkedin.com/in/matthew-svenson/" className="text-sky-500">Linkedin</a>
            </div>
        </div>
    </div>
    );
}