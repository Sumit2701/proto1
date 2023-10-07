import React from "react";
import { getServerSession } from "next-auth/next";

export default function UploadForm(props) {
  return (
    <div className=" mx-auto sm:w-2/5">
      <div>
        <label className="text-sm">Album Name</label>
        <input
          type="type"
          className="py-2 px-3 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div>
        <label className="text-sm">Description</label>
        <input
          type="type"
          maxLength="50"
          className="py-2 px-3 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div>
        <label className="text-sm">
          How many Photos Can your client Select
        </label>
        <input
          type="number"
          placeholder=" (Optional)"
          className="py-2 px-3 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div>
        <label className="text-sm">
          Set password for your client to acess Photos
        </label>
        <input
          type="text"
          placeholder="(Optional)"
          className="py-2 px-3 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
        />
      </div>
      <div className="">
        <label className="text-sm">Allow Download</label>
        <label
          htmlFor="download"
          className="flex py-2 px-3  w-full bg-white border border-gray-200 rounded-md text-sm
                  focus:border-blue-500 focus:ring-blue-50"
        >
          <input
            type="checkbox"
            className="shrink-0  border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="download"
          />
          <span className="text-sm text-gray-500 ml-3">Yes</span>
        </label>
      </div>
      <div className="">
        <label className="text-sm">Allow Upload</label>
        <label
          htmlFor="upload"
          className="flex py-2 px-3  w-full bg-white border border-gray-200 rounded-md text-sm
                  focus:border-blue-500 focus:ring-blue-50"
        >
          <input
            type="checkbox"
            className="shrink-0  border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="upload"
          />
          <span className="text-sm text-gray-500 ml-3">Yes</span>
        </label>
      </div>
    </div>
  );
}
