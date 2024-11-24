import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { ReactTyped } from "react-typed";
import { RiTailwindCssFill } from "react-icons/ri";
import style from "../../public/coder.png";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className='className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'
      >
        <div className=" flex flex-col md:flex-row">
          <div className=" md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className=" text-xl">Welcome In My Feed</span>
            <div className=" flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className=' text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
                className=" text-red-700 font-bold"
                strings={["Developer", "Programer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className=" text-sm md:text-md text-justify">
              Hi, I'm Sourabh Kumar, a passionate web developer and software
              engineer with a strong focus on creating intuitive and dynamic
              user experiences. With expertise in HTML, CSS, JavaScript,
              tailwind css, java and the React framework, I specialize in
              building responsive and interactive frontend applications. I
              thrive on turning ideas into reality and continuously strive to
              expand my skills in modern web development.
            </p>
            <br />
            {/* social media icon*/}

            <div className=" flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-6">
              <div className=" space-y-2">
                <h1 className=" font-bold text-center">Available on</h1>
                <ul className=" flex space-x-5">
                  <li className=" text-2xl cursor-pointer">
                    <a href="https://www.facebook.com/profile.php?id=100086372482128" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className=" text-2xl cursor-pointer">
                    <a href="https://www.linkedin.com/in/sourabh-kumar-57564b2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className=" text-2xl cursor-pointer">
                    <a href="https://www.instagram.com/padhan_g_3100/" target="_blank">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className=" text-2xl cursor-pointer">
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" space-y-2">
                <h1 className=" font-bold text-center">Currently working on</h1>
                <div className=" flex space-x-5 cursor-pointer">
                  <TiHtml5 className=" text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                  <FaCss3Alt className=" text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoJavascript className=" text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className=" text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaJava className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                  <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={style}
              alt=""
              className=" rounded-full md:w-[450px] md:h-[450px] "
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
