'use client'
import React from "react";
import Upload from "./Components/Upload";
import UploadForm from "./Components/UploadForm";
import { useState } from "react";
export default function CreateAlbum() {
    const [formData, setformData] = useState({
        albumName:"",
        description:"",
        photoSelectionLimit:1000000,
        UploadAllowed:true,
        DownloadAllowed:true,
        imageUrl1:[],
        imageUrl2:[],
        imageUrl3:[],
        
    })
  return (
    <form>
      <div className="sm:flex sm:mt-10 mt-3 sm:mx-0 mx-5 ">
    <UploadForm props={[formData,setformData]}/>
     <Upload props={[formData,setformData]}/>
      </div>
      <div className="  text-center">
        <button className=" w-1/6 sm:my-8 my-2 py-3 text-white   bg-blue-600 rounded">Submit</button>
      </div>
    </form>
  );
}
