import { useState } from "react";
import PropTypes from 'prop-types';
import { IoClose } from "react-icons/io5";


function ResetPassword({ Reset, setReset }) {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the password to your backend to reset the user's password
    console.log("New password:", password);
  };

  return (
    <>
      {Reset && (
      <div className="fixed inset-0 z-30 grid place-items-center bg-[#3d3d3d91]">
<div className="fixed z-30 bg-white  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-md w-full max-w-md p-6">
          <h2 className="text-xl font-bold mb-8 flex items-center justify-between">Reset Password <IoClose onClick={() => setReset(false)} className="mb-8 font-thin text-2xl cursor-pointer" />
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Create a password for the user"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setReset(false)}
                type="button"
                className="gray-btn"
              >
                Cancel
              </button>
              <button
               onClick={() => setReset(false)}  
                type="submit"
                className="blue-btn ml-2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
        
      )}
    </>
  );
}

ResetPassword.propTypes = {
  Reset: PropTypes.bool.isRequired,
  setReset: PropTypes.func.isRequired,
};

export default ResetPassword;
