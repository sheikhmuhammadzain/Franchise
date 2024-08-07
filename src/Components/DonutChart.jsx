const DonutChart = () => {
  return (
    <div className="w-80 h-30">
      <div className="grid">
        {" "}
        <div className="relative grid ">
          <svg viewBox="0 0 36 36" className="w-full h-auto">
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#e6e6e6"
              strokeWidth="8"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeDasharray="19.9 80.1"
              strokeDashoffset="25"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#22c55e"
              strokeWidth="8"
              strokeDasharray="80.1 19.9"
              strokeDashoffset="25"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm text-gray-500 font-bold">Total Sales</span>
            <span className="text-xl font-semibold">$66,500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
