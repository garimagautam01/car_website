import React from "react";
import {AiOutlineDown} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci';
// import "./navbar.css";
  


const Navbar=()=>{
       return(
        <>
         <div className="  flex bg-slate-200 rounded-xl h-20 mx-8 gap-10">
            <div className="mt-5 ml-8 ">
              <form action="">
                <div className="flex ">
                <input className=" rounded-xl w-64 text-sm p-2" type="text" placeholder="Search..."  />
                <div className=""><CiSearch/></div>
                </div>
              </form>
            </div>
            <div className="mt-6">
              <ul className=' font-medium flex gap-10'>
                  <div className="flex gap-1">
                  <li>Relevance</li>
                 <div className="mt-1.5"> <AiOutlineDown/></div>
                  </div>
                  <div className="flex gap-1">
                  <li>All Brands</li>
                 <div className="mt-1.5"> <AiOutlineDown/></div>
                  </div>
                 
              </ul>
            </div>
         </div>
        </>
       )
}

export default Navbar;