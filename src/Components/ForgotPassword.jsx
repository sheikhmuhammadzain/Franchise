import  { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation (you might want to implement more robust validation)
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    // Send reset link logic here
    console.log("Sending reset link to:", email);
    setErrorMessage(""); // Clear error message after successful submission
  };

  return (
    <div className="grid place-items-center pt-40 h-screen lg:p-40">
      <div className="bg-white  rounded-lg   shadow-md  m-auto mt-9 lg:w-1/2 p-10 ">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Enter Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errorMessage && (
              <p className="text-red-500 mt-1">{errorMessage}</p>
            )}
          </div>
          <div className="flex justify-end">
            <Link to="/login">
              <button
                type="button"
                className="border text-gray-400 font-thin hover:border-gray-400  py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-thin"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
