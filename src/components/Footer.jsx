import React from 'react'
import { FaFacebook } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";





const Footer = () => {
  return (
    <>
    <hr />
    <footer className=' py-12'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className=' flex  flex-col items-center justify-center'>
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
          <div className=' mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className=' text-sm'>&copy; 2024 Your Company. All rights reserved</p>
            <p className=' text-sm'>Supportive Partner ❤️ Sourabh</p>

          </div>
        </div>
      </div>
     
    </footer>
    </>
  )
}

export default Footer ;