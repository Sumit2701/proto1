'use client'
import React from "react";
import  { useState, useEffect } from 'react';
import axios from "axios";


export default function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);


  // const handleUpload = () => {
  //   if (!selectedFile) {
  //     alert("Please select a file first.");
  //     return;
  //   }

  //   // Create a FormData object and append the selected file to it
  //   const formData = new FormData();
  //   formData.append("file", selectedFile);

  //   // Make an axios POST request to your backend API
  //   axios.post("http://localhost:5000/resize-images", formData)
  //     .then((response) => {
  //       // Handle the response from the backend as needed
  //       console.log("File uploaded successfully!", response);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during the upload
  //       console.error("Error uploading file:", error);
  //     });
  // };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);

    // Call uploadFiles after setting selected files
   
   
  };
 

  
  return (
    <div className="sm:w-2/5 mx-auto sm:my-auto my-2">
      <div className="max-w-xl">
        <label className="flex justify-center w-full sm:h-48 h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop files to Attach, or &nbsp;
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input
            type="file"
            name="file_upload"
            onChange={handleFileChange}
          
            className="hidden"
          />
        </label>
        <button className="bg-gray-200" onClick={handleUpload}> Upload</button>
    
      
      </div>
    </div>
  );
}

