import React from "react";
import html from "../../public/html.svg";
import CSS from "../../public/CSS.png";
import js from "../../public/js.png";
import react from "../../public/react.png";
import Tailwind from "../../public/Tailwind.png";
import Java from "../../public/java.png"
import Github from "../../public/Github.png"

const Experiance = () => {
  const Carditem = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: CSS,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JS",
    },
    {
      id: 3,
      logo: react,
      name: "React",
    },
    {
      id: 4,
      logo: Tailwind,
      name: "Tailwind Css",
    },
    {
      id: 5,
      logo: Java,
      
    },
    {
      id: 6,
      logo: Github
    }
  ];
  return (
    <div
      name="Experiance"
      className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className=" text-3xl font-bold mb-5">Experiance</h1>
        <p>
          Although I am a fresher, I have over two years of hands-on experience
          working with HTML, CSS, JavaScript, React, Tailwind css
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {Carditem.map(({ id, logo, name }) => (
            <div
              className=" md:w-[200px] md:h-[200px] flex flex-col items-center justify-center border-[2px] rounded-full shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px]  rounded-full " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
