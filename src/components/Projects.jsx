import React from "react";
// import html from "../../public/html.svg"
// import css from "../../public/CSS.png"
// import js from "../../public/js.png"
// import react from "../../public/react.png"
// import Tailwind from "../../public/Tailwind.png"

const Projects = () => {
  // const Carditem = [
  //   {
  //     id:1,
  //     logo:html,
  //     name:"html"
  //   },
  //   {
  //     id:2,
  //     logo:css,
  //     name:"CSS"
  //   },
  //   {
  //     id:3,
  //     logo:js,
  //     name:"JS"
  //   },
  //   {
  //     id:3,
  //     logo:react,
  //     name:"React"
  //   },
  //   {
  //     id:4,
  //     logo:Tailwind,
  //     name:"Tailwind css"

  //   },

  // ]
  return (
    //     <div name="Portfolio" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    //       <div>
    //         <h1 className=' text-3xl font-bold mb-5'>Portfolio</h1>

    //         <h1>Major Project</h1>
    //         <h1> 1.E - Commerce</h1>
    //         <span>
    // Built a fully functional e-commerce platform using React, featuring:
    // Add-to-cart functionality.
    // Payment gateway integration.
    // Complete product browsing and purchasing workflows.</span>
    //        <h1> Portfolio Website</h1>
    //        <span>Designed and developed a responsive portfolio website to showcase my skills, projects, and experience.</span>
    //        <h1>Minor Project</h1>
    //        <h1>To-Do App</h1>
    //        <span>Created a simple and efficient task management app with React, featuring local storage and CRUD functionalities.</span>

    //         <span className=' underline font-semibold'>Featured Projects</span>
    //         <div className=' grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
    //           {
    //             Carditem.map(({id,logo,name})=>(
    //               <div className=' md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
    //                 <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
    //                 <div>
    //                   <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
    //                   <p className=' px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur  explicabo?</p>
    //                 </div>
    //                 <div className=' px-6 py-4 space-x-4 justify-around'>
    //                   <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
    //                   <button className=' bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
    //                 </div>

    //               </div>
    //             ))
    //           }

    //         </div>
    //       </div>
    //     </div>

    <div
      name="Projects"
      className='className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'
    >
      <div>
        <h2 className=" text-3xl font-bold mb-5">PROJECTS</h2>

        <h1 className=" text-red-900  text-xl font-bold mb-5">Major Project</h1>

        <h1 className=" text-green-500 font-semibold">E-Commerce Website</h1>
        <span>
          Built a fully functional e-commerce platform using React, featuring:
          Add-to-cart functionality. Payment gateway integration. Complete
          product browsing and purchasing workflows.
        </span>
        <br />
        <br />

        <h1 className=" text-green-500 font-semibold">Portfolio Website</h1>
        <span>
          Designed and developed a responsive portfolio website to showcase my
          skills, projects, and experience.
        </span>

        <br />
        <br />
        <h1 className=" text-red-900  text-xl font-bold mb-5">Minor Project</h1>
        <h1 className=" text-green-500 font-semibold">ToDo App</h1>
        <span>
          Created a simple and efficient task management app with React,
          featuring local storage and CRUD functionalities.
        </span>
      </div>
    </div>
  );
};

export default Projects;

