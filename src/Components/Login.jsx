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
  const [forgot, setforgot] = useState(true);

  return (
    <>
      <div className=  {!forgot?'fixed inset-0 grid place-items-center bg-[#22222291] bg-white z-20':'hidden'}  >
        <div className="bg-white min-w-[50vw] rounded-lg">
          <div className="flex justify-between items-center gap-20 bg-gray-50 px-10 py-6 rounded-lg">
            <h1 className="font-bold text-2xl">Forgot Password</h1>
            <p className="font-bold cusor-pointer" onClick={() => setforgot(true)}>X</p>
          </div>
          <div className="p-10 ">
            <h1 className="mb-3">Confirm Email Adress</h1>
            <input
              type="email"
              placeholder="Enter the email "
              className=" border px-2 block w-full py-4 rounded-lg"
            />
            <div className="flex justify-end py-6 gap-8">
              <button className="font-bold border px-3 rounded-lg text-gray-600 " onClick={()=>setforgot(true)}>Cancel</button>
              <button className="btn btn-primary">Send Reset Link</button>
            </div>
          </div>
        </div>
      </div>

      <header className="h-[70px] bg-white border shadow-md fixed top-0 left-0 z-10 w-full flex items-center justify-center ">
        <img
          src="/group-84152-1@2x.png"
          width={144}
          className="cursor-pointer"
          alt=""
        />
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
          <h2 className="text-3xl font-bold mb-4 text-center ">
            LOG IN{" "}
            <Link to="/">
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
          <div className="text-center mt-4 underline cursor-pointer" onClick={()=>setforgot(false)}>
            Forgot password?
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
