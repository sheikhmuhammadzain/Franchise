import  { useState } from "react";
import { MdClose } from "react-icons/md";

function DeleteUser({Delete, setDelete}) {

  const openPopup = () => {
    Delete(true);
  };

  const closePopup = () => {
    setDelete(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Delete Account</button>

      {Delete && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white  rounded-lg shadow-lg pb-4 max-w-[700px]">
            <h2 className="text-xl rounded-lg bg-gray-50 p-5 mb-4 flex item-center justify-between">Delete Account <MdClose />
            </h2>
            <div className="px-4 py-2">
            <p className="mb-4 font-bold">
              Deleting this franchisor will also delete the following associated
              accounts:
            </p>
            <ul className="list-disc ml-6 mb-4 font-bold">
              <li>5 Franchisees</li>
              <li>2 Sales</li>
            </ul>
            <p className="text-red-500 ">
              This action cannot be undone.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="gray-btn  mr-4"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="px-4 py-3 bg-red-400 text-white rounded"
                onClick={() => {
                  // Implement delete logic here
                  closePopup();
                }}
              >
                Delete All
              </button>
            </div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteUser;
