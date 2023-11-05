'use client'
import React from "react";
import  { useState, useEffect } from 'react';
import axios from "axios";


export default function Upload() {

  const [selectedFile, setSelectedFile] = useState(null);


 
  
  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   const content_type = file.type;
  //   const key = `image/${file.name}`;
  
  //   setSelectedFile(e.target.files[0]);
  //   const res = await getSignedUrl({ key, content_type });
  
  //   // Function to upload the file to the obtained signed URL
  //   const uploadToSignedUrl = async (signedUrl, file) => {
  //     try {
  //       const response = await fetch(signedUrl, {
  //         method: 'PUT',
  //         body: file,
  //         headers: {
  //           'Content-Type': file.type,
  //         },
  //       });
  
  //       if (response.ok) {
  //         console.log('File uploaded successfully!');
  //         // Additional logic after successful upload
  //       } else {
  //         console.error('Failed to upload file.');
  //         // Additional error handling
  //       }
  //     } catch (error) {
  //       console.error('Error occurred during file upload:', error);
  //       // Additional error handling
  //     }
  //   };
   
  //  await uploadToSignedUrl(res.url.signedUrl, file);
  // };
 
  const handleFileChange = async (e) => {
    const files = e.target.files;
    
    for (const file of files) {
      const content_type = file.type;
      const key = `test/${file.name}`;
      
      try {
        const res = await getSignedUrl({ key, content_type });
  
        // Function to upload the file to the obtained signed URL
        const uploadToSignedUrl = async (signedUrl, file) => {
          try {
            const response = await fetch(signedUrl, {
              method: 'PUT',
              body: file,
              headers: {
                'Content-Type': file.type,
              },
            });
  
            if (response.ok) {
              console.log(`${file.name} uploaded successfully!`);
              // Additional logic after successful upload
            } else {
              console.error(`Failed to upload ${file.name}.`);
              // Additional error handling
            }
          } catch (error) {
            console.error(`Error occurred during ${file.name} upload:`, error);
            // Additional error handling
          }
        };
        
        await uploadToSignedUrl(res.url.signedUrl, file);
      } catch (error) {
        console.error('Error obtaining signed URL:', error);
        // Additional error handling
      }
    }
  };
  

  async function getSignedUrl({ key, content_type }) {
    try { 
      console.log(key)
      const response = await fetch(`http://localhost:8080/s3Url/?key=${key}&content_type=${content_type}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
       
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      console.log("Pathavli")
      return await response.json();
      
    
    } catch (error) {
      // Handle error, e.g., throw or log the error
      console.error('Error:', error);
      // throw error; // Uncomment this line if you want to propagate the error
    }
  
  
   
  }
   
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
            multiple
            className="hidden"
          />
        </label>
        <button className="bg-gray-200" > Upload</button>
    
      
      </div>
    </div>
  );
}

