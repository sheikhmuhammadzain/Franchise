import { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgot, setForgot] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <div
        className={
          !forgot
            ? "fixed inset-0 grid place-items-center bg-[#3d3d3d91] z-30"
            : "hidden"
        }
      >
        <div className="bg-white min-w-[40vw] rounded-lg">
          <div className="flex items-center justify-between gap-10 px-8 py-3 rounded bg-gray-50">
            <h1 className="text-lg font-bold">Forgot Password</h1>
            <p className="font-bold cursor-pointer" onClick={() => setForgot(true)}>
              <RiCloseFill className="mb-2 ml-2" />
            </p>
          </div>
          <div className="px-5 py-2">
            <h1 className="mb-3 font-semibold">Confirm Email Address</h1>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="block w-full px-4 py-2 border rounded-lg"
            />
            <div className="flex justify-end gap-4 py-6">
              <button
                className="px-5 text-gray-400 border rounded-lg"
                onClick={() => setForgot(true)}
              >
                Cancel
              </button>
              <button className="px-10 py-2 bg-[#326DCF] text-white rounded">
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="h-[70px] bg-white border shadow-md fixed top-0 left-0 z-10 w-full flex items-center justify-center">
        <img
          src="/group-84152-1@2x.png"
          width={144}
          className="cursor-pointer"
          alt="Logo"
        />
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-center">
            LOG IN{" "}
            <Link to="/" />
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-bold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Password"
                  required
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#326DCF] shadow-lg rounded-md hover:bg-blue-700"
            >
              SIGN IN
            </button>
          </form>
          <div
            className="mt-4 text-center underline cursor-pointer"
            onClick={() => setForgot(false)}
          >
            Forgot password?
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
