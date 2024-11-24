import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo ={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
      await axios.post("https://getform.io/f/bvrrmmzb",userInfo);
      toast.success("your message has been sent");

    }
    catch (error){
      console.log(error);
      toast.error("something went wrong")

    }
  };
  return (
    <>
      <div
        name="Contact"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className=" text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div
          className=" flex flex-col items-center justify-center mt5
      "
        >
          <form
           onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bvrrmmzb"
            // method="POST"
            className=" bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className=" text-xl font-semibold mb-4">Send youe Message</h1>
            <div className=" flex flex-col mb-4">
              <label className=" block text-gray-700">FullName</label>

              <input
              {...register("name", { required: true })} 
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Fullname"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              />
               {errors.name && <span>This field is required</span>}

            </div>

            <div className=" flex flex-col mb-4">
              <label className=" block text-gray-700">email Address</label>

              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email Address"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}

            </div>

            <div className=" flex flex-col mb-4">
              <label className=" block text-gray-700">message</label>

              <textarea
                {...register("message", { required: true })}
                type="text"
                name="message"
                id="message"
                placeholder="Enter your Query"
                className=" rounded-lg shadow appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              />
               {errors.message && <span>This field is required</span>}
            </div>

            <button
              className=" bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
