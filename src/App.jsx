import { DefaultSidebar } from "./Components/DefaultSidebar";
import Header from "./Components/Header";
const App = () => {
  return (
    <div className="flex">
      <DefaultSidebar />
      <Header />
    </div>
  );
};

export default App;
