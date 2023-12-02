'use client'
import React, { useState } from "react";
import Upload from "./Components/Upload";
import UploadForm from "./Components/UploadForm";

export default function CreateAlbum() {
  const [formData, setFormData] = useState({
    albumName: "",
    description: "",
    photoSelectionLimit: 1000000,
    UploadAllowed: true,
    DownloadAllowed: true,
    imageUrl1: [],
    imageUrl2: [],
    imageUrl3: [],
  });

  const [showUploadForm, setShowUploadForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/CreateAlbum/api', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        console.log("done")
        // Handle success, e.g., show a success message or redirect
      } else {
       console.log(response)
      }
    } catch (error) {
      // Handle errors in making the request
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:flex sm:mt-10 mt-3 sm:mx-0 mx-5">
        {showUploadForm ? (
          <UploadForm props={[formData, setFormData]} />
        ) : (
          <Upload />
        )}
      </div>
      <div className="text-center">
        {showUploadForm && (
          <button
          onClick={()=>setShowUploadForm(false)}
            // type="submit"
            className="w-1/6 sm:my-8 my-2 py-3 text-white bg-blue-600 rounded"
          >
            Next
          </button>
        )}
      </div>
    </form>
  );
}
