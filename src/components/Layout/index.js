import { Outlet } from "react-router-dom";
import Home from "../Home";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">&lt;body&gt;</div>

        <Outlet />
        <span className="tags bottom-tag-html">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
