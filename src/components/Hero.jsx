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
  const animateTitle = (title) => {
    const letters = title.split("");
  
    return letters.map((letter, index) => (
      <span key={index}>
        <span
          onMouseEnter={(e) => {
            e.target.classList.add("wave")
            setTimeout(() => {
              e.target.classList.add("stop");
            }, 5000);
          }}
          style={{ whiteSpace: "pre" }}>
          {letter}
        </span>
      </span>
    ));
  };
  
  return (
    <div className='flex justify-around items-center h-screen hero'>
      <div className='flex flex-col gap-4 animate__animated animate__fadeInLeft text-white'>
        <h1 className='text-5xl'>{animateTitle("As Freelancers,")}</h1>
        <h2 className='text-7xl'>{animateTitle("All About Your Project")}</h2>
        <div className='flex flex-wrap justify-start gap-10 mt-10 sm:mt-20'>
          <SiReact size={50} color='#61DAFB' className='icon' />
          <SiVuedotjs size={50} color='#4FC08D' className='icon' />
          <SiJavascript size={50} color='#F7DF1E' className='icon' />
          <SiTypescript size={50} color='#3178C6' className='icon' />
          <SiExpress size={50} color='#000000' className='icon' />
          <SiPython size={50} color='#3776AB' className='icon' />
          <SiRuby size={50} color='#CC342D' className='icon' />
          <SiPhp size={50} color='#777BB4' className='icon' />
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
}


export default Hero;
