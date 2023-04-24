import Contact from "./Contact";

function Hero() {
  return (
    <div className="flex justify-around items-center h-screen hero">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl text-white">As Freelancers</h1>
        <h2 className="text-6xl text-white">All About Your Project</h2>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Hero;
