import React from 'react';
import Layout from '../components/layout';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import ThreeScene from '../components/threeScene';


const Home = () => {
  return (
    <Layout>
      <div className='flex md:flex-col'>
      <Navbar />
      <div className='flex flex-col grow justify-center md:flex-row md:gap-80 md:justify-center '>
      <h1 className="text-4xl md:text-5xl lg:text-7xl">MALICK</h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl">BAGUIRI</h1>
      </div>
      </div>
    <div className="relative">
      <div className="absolute top-10 left-1/2 transform -translate-y-2/10 -translate-x-1/2">
        <ThreeScene />
      </div>
      <div className=" space-x-100  w-screen xl:space-x-150 relative   ">
       
        <h2 className=" text-3xl mt-85 pl-[12.5%]  justify-center w-full md:text-5xl md:pr-12 md:justify-center md:mt-60 lg:mt-75 md:flex md:pl-0">DEVELOPPEUR WEB</h2>
        <h2 className="text-3xl mt-95 pl-[12.5%] justify-center w-full md:text-3xl md:pr-12 md:justify-center md:mt-70 lg:mt-85 md:flex md:pl-0 ">Votre futur alternant</h2>
        {/* <h2 className=" text-3xl mt-130 pl-[3%] w-full md:text-5xl md:pt-5 md:mt-80 ">WEB</h2> */}

      </div>
    </div>

   
    </Layout>
  );
 
};

export default Home;


