import  { useState } from "react";

function DeleteUser() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Delete Account</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Delete Account</h2>
            <p className="mb-4">
              Deleting this franchisor will also delete the following associated
              accounts:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>5 Franchisees</li>
              <li>2 Sales</li>
            </ul>
            <p className="text-red-500 font-bold">
              This action cannot be undone.
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Implement delete logic here
                  console.log("Delete All clicked!");
                  closePopup();
                }}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteUser;
