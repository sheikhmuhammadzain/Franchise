import Header from "./Components/Header";
import ManageUser from "./Components/ManageUser";
import Sidebar from "./Components/Sidebar";
const App = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Header />
          <ManageUser />
        </div>
      </div>
    </>
  );
};

export default App;
