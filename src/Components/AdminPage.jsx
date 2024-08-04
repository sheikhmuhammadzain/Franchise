import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
const AdminPage = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default AdminPage