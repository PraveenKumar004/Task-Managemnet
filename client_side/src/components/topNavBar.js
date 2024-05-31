import React from 'react';
import '../styles/navAndLayout.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";

const TopNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex topnav align-items-center'>
                <div className='bar ps-3' onClick={handleShow}><FaBars /></div>
                <div className='title pt-1'>KSR TMS </div>
                <div className='tophead pt-1'>Dashboard</div>
            </div>
            <Offcanvas show={show} onHide={handleClose} className='offcanva w-75'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>KSR TMS</Offcanvas.Title>
                </Offcanvas.Header>
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
            </Offcanvas>
        </>
    );
};

export default TopNav;
