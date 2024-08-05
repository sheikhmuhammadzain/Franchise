import { Link } from "react-router-dom";
import { useState } from "react";
import ManageUser from "./ManageUser";

const ManageUserPage = () => {
  const [visibleForm, setvisibleForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => { 
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { firstName, lastName, email, password });
  };
  return (
    <>
      <div
        className={
          visibleForm ? "fixed inset-0 h-full w-full bg-[#1b1b1b4d]" : "hidden"
        }
      >
        {/* franshisorform */}

        <div className="fixed z-90   inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-4">Add Franchisor</h2>
              <Link to="/">
                <h2
                  onClick={() => setvisibleForm(false)}
                  className="cursor-pointer font-bold mb-3"
                >
                  X
                </h2>
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className=" text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className=" text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter Last Name"
                />
              </div>
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
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  placeholder="Create a password for the user"
                />
              </div>
              <div className="flex justify-end">
                <button onClick={()=>setvisibleForm(false)}
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <main className="bg-[#FAFBFA] min-h-screen ">
        <div className="container max-w-[82%] ml-auto mt-[45px] px-7 ">
          <ManageUser/>
        </div>
      </main>
    </>
  );
};

export default ManageUserPage;
