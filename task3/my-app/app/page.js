"use client"

import { useState } from "react";
import axiosClient from "axios";

export default function Home() {

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post("https://chimpu.xyz/api/post.php", {phonenumber:phone}).then((res) => {
      console.log(res.data?.msg);
      setMessage(res.data?.msg);
    });
    setPhone("");
    // console.log(phone);
  }

  return (
   <div className="w-[80%] flex justify-center items-center flex-col mt-10 ">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label className="m-5 text-blue-800 font-bold text-xl">
          Phone:
          <input type="text" name="phone" 
          value={phone} onChange={(e) => setPhone(e.target.value)} className="w-[200px] bg-gray-100 rounded-lg m-5 p-2" required />
        </label>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      <div className="w-[600px] h-10 bg-gray-200 flex items-center p-4 m-5 font-bold text-purple-800">
          Your Response is : <span className="ml-5 font-serif">{message} </span>
      </div>
   </div>
  );
}
