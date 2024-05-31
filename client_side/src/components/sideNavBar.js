import React from 'react';
import '../styles/navAndLayout.css';
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";

const SideNav = () => {

  return (
    <>
      <div className='sidenav'>
        <div className='inside-sidenav'>
          <NavLink className='sidenav-links d-flex' to='/'>
            <div><MdDashboard /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Dashboard</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/members'>
            <div><BsFillPeopleFill /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Members</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/tasks'>
            <div><CgProfile /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Tasks</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/profile'>
            <div><MdOutlineTaskAlt /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Profile</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/setting'>
            <div><IoSettingsOutline /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Setting</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNav;
