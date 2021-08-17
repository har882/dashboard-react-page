import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { BiCalendarCheck} from "react-icons/bi";
import {AiOutlineFolder} from "react-icons/ai";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Navbar.css";


const NavBar = () => {
 

return (
  <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar >
        <SidebarHeader>

          
        </SidebarHeader>
        <SidebarContent>
          <Menu >
            <MenuItem className="circle-logo"><div className="circle"></div></MenuItem>
            <MenuItem active={true} icon={<FiHome />}></MenuItem>
            <MenuItem icon={<FaList />}></MenuItem>
            <MenuItem icon={<FaRegHeart />}></MenuItem>
            <MenuItem icon={<RiPencilLine />}></MenuItem>
            <MenuItem icon={<AiOutlineFolder />}></MenuItem>
            <MenuItem icon={<BiCalendarCheck />}></MenuItem>
            <MenuItem icon={<FiLogOut />}></MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">

            <MenuItem icon={<BiCog />}></MenuItem>

          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  </>
);
};


export default NavBar;
