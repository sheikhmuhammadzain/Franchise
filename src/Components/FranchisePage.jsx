import Header from "./Header";
import Franchisee from "./Franchisee";
import Sidebar from "./Sidebar";
import {Link} from 'react-router-dom'
const FranchisePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
       <Franchisee/>
    </div>
  );
};

export default FranchisePage;
