import React from "react";
import {
    CDBBadge,
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Sidebar = () => {
    return (
//this js contains sidebar component on activity screen.
<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
<CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
  <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
      Activities
    </a>
  </CDBSidebarHeader>
  <CDBSidebarContent>
    <CDBSidebarMenu>
    <CDBSidebarMenuItem
              suffix={
                <CDBBadge color="danger" size="small" borderType="pill">
                  Home
                </CDBBadge>
              }
              icon="home"
            >
                Home
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem
              suffix={
                <CDBBadge color="danger" size="small" borderType="pill">
                  Home
                </CDBBadge>
              }
              icon="plus"
            >
                add
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem
              suffix={
                <CDBBadge color="danger" size="small" borderType="pill">
                  Home
                </CDBBadge>
              }
              icon="gamepad"
            >
                add
              </CDBSidebarMenuItem>
    </CDBSidebarMenu>
  </CDBSidebarContent>
  <CDBSidebarFooter style={{ textAlign: 'center' }}>
    <div
      className="sidebar-btn-wrapper"
      style={{
        padding: '20px 5px',
      }}
    >
      Sidebar Footer
    </div>
  </CDBSidebarFooter>
</CDBSidebar>
</div>
);
};

export default Sidebar;
