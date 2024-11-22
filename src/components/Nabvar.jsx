import React, { useState } from "react";
import style from "../../public/coder.png";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';

const Nabvar = () => {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experiance"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className=" flex justify-between h-16 items-center">
          <div className=" flex space-x-2">
            <img src={style} alt="" className=" h-12 w-12 rounded-full" />
            <h1 className=" font-semibold text-xl cursor-pointer">
              SOURABH<span className=" text-gray-500 text-2xl"> KUMAR</span>
              <p className=" text-sm">Web Developer</p>
            </h1>

            {/* laptop navbar */}
          </div>
          <div>
            <ul className=" hidden md:flex space-x-8">
              {
                navItems.map(({id,text})=>(
                  <li  className=" hover:scale-105 duration-200 cursor-pointer" key={id}>
                    <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active">{text}</Link></li>
                ))
              }
            </ul>
            <div onClick={() => setmenu(!menu)} className=" md:hidden">
              {menu ? <ImCross size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className=" bg-white">
            <ul className=" md:hidden flex flex-col h-screen items-center justify-center space-y-5">
            {
                navItems.map(({id,text})=>(
                  <li className=" hover:scale-105 duration-200 cursor-pointer" key={id}><Link onClick={() => setmenu(!menu)} 
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">{text}</Link></li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nabvar;
