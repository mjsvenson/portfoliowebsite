import Image from 'next/image';


export default function Intro() {

  return (
      <div id="Intro" className="bg-black h-[100]">
      <Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGgxanduMDYzMHFra2MwNG1sMGx6a3pteng1dTViaXNxaDI2NmQ4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ojq39yZKOic9pqU0Z/giphy.gif" 
      alt="This is where the gif is shown"
      width={100}
      height={100}
      />
    </div>
  )
}
