import { Link } from "react-router-dom";
import { useState } from "react";

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
        <div className="container max-w-[80%] ml-auto px-7 ">
          <div className="flex items-center justify-between pt-[100px]  ">
            <h1 className="font-semibold text-xl">Manage User</h1>
            <button
              onClick={() => setvisibleForm(true)}
              className="bg-[#326DCF] text-white rounded-lg  px-6 py-2 text-xs md:text-base"
            >
              {" "}
              <span className="mr-3 font-bold">+</span> Add Franschisor
            </button>
          </div>
          <div className="flex items-center gap-9 mt-9 border-b-2 py-4 font-bold">
            <Link to="/">
              <h1 className="text-[#326DCF]  border-b-blue">Franchisor</h1>
            </Link>

            <Link to="/franchise">
              {" "}
              <h1>Franchisee</h1>
            </Link>
            <Link to="/sales">
              {" "}
              <h1>Sales</h1>
            </Link>
          </div>
          <div className="mt-12 bg-white p-4 rounded-lg shadow-md">
            <div className="min-h-8 bg-[#FAFBFA] rounded-md"></div>
            <div className=" flex flex-col gap-4 items-center mt-8 bg-[#FAFBFA] py-7 rounded-md">
              <h1 className="text-xl font-bold">
                You have not added any leads yet!
              </h1>
              <p>Click the button below to get started with your first lead.</p>
              <button
                onClick={() => setvisibleForm(true)}
                className="bg-[#326DCF] text-white rounded-lg  px-7 py-2 text-xs md:text-base"
              >
                {" "}
                <span className="mr-3 font-bold">+</span> Add Franschisor
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManageUserPage;
