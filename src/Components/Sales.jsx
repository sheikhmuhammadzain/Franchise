import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const Sales = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="bg-[#FAFBFA] min-h-screen ">
        <div className="container max-w-[80%] ml-auto px-7 ">
          <div className="flex items-center justify-between pt-[100px]  ">
            <h1 className="font-semibold text-xl">Manage User</h1>
            <button className="bg-[#326DCF] text-white rounded-lg  px-6 py-2 text-xs md:text-base">
              {" "}
              <span className="mr-3 font-bold">+</span> Add Franschisor
            </button>
          </div>
          <div className="flex items-center gap-9 mt-9 border-b-2 py-4 font-bold">
            <Link to="/">
              <h1>Franchisor</h1>
            </Link>

            <Link to="/franchise">
              {" "}
              <h1>Franchisee</h1>
            </Link>
            <Link to="/sales">
              {" "}
              <h1 className="text-[#326DCF]  border-b-blue">Sales</h1>
            </Link>
          </div>
          <div className="mt-12 bg-white p-4 rounded-lg shadow-md">
            <div className="min-h-8 bg-[#FAFBFA] rounded-md"></div>
            <div className=" flex flex-col gap-4 items-center mt-8 bg-[#FAFBFA] py-7 rounded-md">
              <h1 className="text-xl font-bold">
                You have not added any leads yet!
              </h1>
              <p>Click the button below to get started with your first lead.</p>
              <button className="bg-[#326DCF] text-white rounded-lg  px-7 py-2 text-xs md:text-base">
                {" "}
                <span className="mr-3 font-bold">+</span> Add Franschisor
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;
