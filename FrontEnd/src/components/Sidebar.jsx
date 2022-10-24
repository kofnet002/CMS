import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <Link to="#" className="humberger-menu">
            <FaBars onClick={showSidebar} />
          </Link>
          <h3 className="text-white text-start">Church Management System</h3>
          <h1></h1>
        </div> 
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            <br /> <br />
            {SidebarData.map((item, index) => {
              const { title, path, icon, cName } = item;
              return (
                <li key={index} className={cName}>
                  <Link to={path} className="link">
                    {icon}
                    <h6>{title}</h6>
                    {/* <article>
                      {submenu.map((item, index) => {
                        const { title, path, icon, cName } = item;
                        return (
                          <li key={index} className={cName}>
                            <Link to={path} className="link">
                              {icon}
                              <span>{title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </article> */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
