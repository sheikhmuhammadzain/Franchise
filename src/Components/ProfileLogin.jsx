import Header from "./Header";
import Sidebar from "./Sidebar";

const ProfileLogin = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="bg-gray-50 p-8 rounded-lg w-[calc(100%-200px)] px-10  min-h-screen mt-[80px] ml-auto flex-1">
        <h1 className="text-2xl font-bold mb-7">Profile</h1>
        <div className="bg-white rounded-lg p-8">
          <div className=" bg-white grid grid-cols-3 gap-4 pb-6">
            <label className="font-bold">First Name</label>
            <label className=" font-bold">Last Name</label>
            <label className="font-bold">Email Address</label>

            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              value="John"
            />
            <input
              type="text"
              className="border border-gray-300 p-2 rounded"
              value="Doe"
            />
            <input
              type="email"
              className="border border-gray-300 p-2 rounded bg-gray-50"
              value="johndoe@gmail.com"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <button className=" text-blue-500 underline py-2 px-4 rounded mr-2">
              Change Password
            </button>
            <div className="flex gap-6">
              {" "}
              <button className="gray-btn">Cancel</button>
              <button className="blue-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLogin;
