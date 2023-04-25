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
        <div className="flex gap-4 mt-[5rem]">
          <SiReact size={40} />
          <SiVuedotjs size={40} />
          <SiJavascript size={40} />
          <SiTypescript size={40} />
          <SiExpress size={40}/>
          <SiPython size={40} />
          <SiRuby size={40} />
          <SiPhp size={40} />
        </div>
      </div>
      
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Hero;
