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
     
      <main className="bg-[#FAFBFA] min-h-screen ">
        <div className="   ">
          <ManageUser />
        </div>
      </main>
    </>
  );
};

export default ManageUserPage;
