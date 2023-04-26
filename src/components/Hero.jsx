import Contact from "./Contact";
import "animate.css";
import {
  SiPython,
  SiReact,
  SiRuby,
  SiVuedotjs,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiExpress
} from "react-icons/si";

function Hero() {
  return (
    <div className="flex justify-around items-center h-screen hero">
      <div className="flex flex-col gap-4 animate__animated animate__fadeInLeft text-white">
        <h1 className="text-5xl">As Freelancers,</h1>
        <h2 className="text-7xl">All About Your Project</h2>
        <div className="flex gap-4 mt-[5rem] technologies">
        <SiReact size={40} color='#61DAFB' className='icon' />
          <SiVuedotjs size={40} color='#4FC08D' className='icon' />
          <SiJavascript size={40} color='#F7DF1E' className='icon' />
          <SiTypescript size={40} color='#3178C6' className='icon' />
          <SiExpress size={40} color='#000000' className='icon' />
          <SiPython size={40} color='#ffd966' className='icon' />
          <SiRuby size={40} color='#CC342D' className='icon' />
          <SiPhp size={40} color='#777BB4' className='icon' />
        </div>
      </div>
      
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Hero;
