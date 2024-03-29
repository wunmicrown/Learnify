import man from "../../assets/mon.png";
import Button from "@mui/material/Button";
// import { motion, useScroll } from "framer-motion";

const Home = () => {
 
  return (
    <>
      <main className="bg-slate-900 to-slate-950 lg:flex justify-between lg:px-20 lg:mt-20 w-full">
        <div className="text-white break-words font-bold lg:mx-20 lg:mt-36 lg:visible invisible">
          <h1 className=" text-blue-400">
            STUDY WHENEVER AND BECOME A GLOBAL TALENT
          </h1>
          <p>Learning any professional skill from the comfort of your home</p>
          <Button variant="contained" className="!mt-4 !bg-yellow-600 !p-4 w-40 !font-bold">Get started</Button>
        </div>

        <div className="text-white break-words font-bold lg:invisible w-full px-5 -mt-20">
          <h3 className="text-4xl">
            STUDY WHENEVER AND BECOME A GLOBAL TALENT
          </h3>
          <small>Learning any professional skill from the comfort of your home</small>
          <Button variant="contained" className="!mt-10 !bg-yellow-600 !p-4 w-full !font-bold">Get started</Button>
        </div>

        <div className="-mt-24 lg:visible invisible">
          <img src={man} alt="an image of a man sitting down and holding a laptop" width={500}/>
        </div>
      </main>
    
      <main className="lg:p-20">
        <h2 className="text-3xl font-bold">Join us. Become the best</h2>
        <div>
          <p>
            LOOK OUT!!
          </p>
        </div>
      </main>
    
    </>
  );
};

export default Home;
