
const DonutChart = () => {
  return (
    <div className="w-40 h-30">
      <div className="grid"><div className="relative grid ">
        <svg viewBox="0 0 36 36" className="w-full h-auto">
          <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#e6e6e6" strokeWidth="3.8"></circle>
          <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#3b82f6" strokeWidth="3.8" strokeDasharray="11.9 99.1" strokeDashoffset="23"></circle>
          <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#22c55e" strokeWidth="3.8" strokeDasharray="82.1 76.9" strokeDashoffset="25"></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-gray-500 font-bold">Total Sales</span>
          <span className=" font-bold">$66,500</span>
        </div>
      </div><div className="mt-4 space-y-2 ">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#22c55e] rounded-full mr-2"></span>
          <span className="text-sm">KFC</span>
          <span className="ml-auto text-sm font-semibold">$60,000</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#3b82f6] rounded-full mr-2"></span>
          <span className="text-sm">Lorem ipsum...</span>
          <span className="ml-auto text-sm font-semibold">$6000</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#e6e6e6] rounded-full mr-2"></span>
          <span className="text-sm">Lorem ipsum...</span>
          <span className="ml-auto text-sm font-semibold">$500</span>
        </div>
      </div></div>
      
      
    </div>
  );
};

export default DonutChart;