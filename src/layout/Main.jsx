import { Outlet } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div >
        <Outlet />
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;