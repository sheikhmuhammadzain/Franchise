
function ManageUser() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md h-screen w-[86%] ml-auto">
      <div className="flex justify-between items-center  my-9">
        <h2 className="text-xl font-bold">Manage User</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          + Add Franchisor
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <ul className="flex border-b ">
          <li className="flex-1 text-center border-b-2 border-blue-500 font-bold">
            Franchisor
          </li>
          <li className="flex-1 text-center">Franchisee</li>
          <li className="flex-1 text-center">Sales</li>
        </ul>
<div className="bg-gray-50 p-9 rounded-lg my-3">

</div>
        <div className="mt-4 text-center flex flex-col gap-9 bg-gray-50 p-20">
          <p className="text-2xl font-bold py-3">You have not added any leads yet!</p>
          <p>Click Button below to get  started with  Your first Lead</p>
          <button className="bg-blue-500 max-w-fit m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            + Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
