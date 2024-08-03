import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
        <h2 className="text-3xl font-bold mb-4 text-center ">
          LOG IN{" "}
          <Link to='/'>
            <span className="ml-9 font-thin text-sm absolute top-[1rem] right-[1.4rem] cursor-pointer">
              X
            </span>
          </Link>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2 w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2 w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-full rounded-md"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/forgot" className="underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
