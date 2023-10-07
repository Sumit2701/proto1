import React from "react";
import hero from "../../Assets/hero.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  
  return (
    <div className="flex sm:flex-row flex-col sm:mt-8 w-auto mx-auto ">
      <div className=" sm:w-1/2  w-11/12 mx-auto  ">
        <h1 className=" md:text-[52px] text-[20px]  pr-6 font-bold  sm:mt-10 sm:mb-5 my-2 items-center">
          Simplify {" "}
          <span className="  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-600">
          Photo
          </span>{" "}
          <br className="sm:visible hidden"/>Selection Process with your Customer 
        </h1>
        <p className="text-[10px] sm:text-base sm:mb-10 ">
          Quickly Share Albums with Clients to help them select the best Photos
          
        </p>
        <div className="my-4 flex flex-row sm:justify-start justify-between">
           <button  className="bg-blue-700 rounded text-white shadow px-2   py-2 text-[8px] sm:text-base w-auto" >
        <Link href={"/CreateAlbum"}>  Share Photos</Link>  
            </button> 
            <button  className=" rounded border-2 border-blue-700 shadow  mx-auto px-1 py-1 text-[8px] sm:text-base " >
            New Here? Subscribe Now
            
            </button> 
        </div>
        
      </div>
      <div>
        <Image src={hero} className=" w-2/3 sm:my-10 my-2 mx-auto" />
      </div>
    </div>
  );
}
