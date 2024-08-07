import  { useState } from 'react';

const ChangePasswordPopup = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white  rounded-lg shadow-lg w-[40%] ">
        <div className="flex justify-between p-3 bg-gray-50 items-center mb-4 rounded-lg">
          <h2 className=" font-bold">Change Password</h2>
          <button onClick={onClose} className="font-bold mb-3 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form className='p-5' onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="block text-sm font-bold text-gray-700 mb-1">Old Password</label>
            <input
              type="password"
              placeholder="Enter old password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your new password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="gray-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="blue-btn ml-3"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;