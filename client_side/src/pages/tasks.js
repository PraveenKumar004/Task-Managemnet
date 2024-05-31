import React from 'react'
import TopNav from '../components/topNavBar'
import SideNav from '../components/sideNavBar'
import '../styles/task.css'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

function Home() {
    return (
        <>
            <div className='top-position'><TopNav /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='task-search-filter mt-4'>
                        <input placeholder='search users' type="search" className='task-search' />
                    </div>
                    <div className='task-search-filter mt-3'>
                        <button className='task-btn' style={{ marginLeft: '0px' }}>Assigned</button>
                        <button className=' task-btn'>Completed</button>
                        <button className=' task-btn' style={{ width: '70px' }}>All</button>
                    </div>
                    <div className='task-list mt-4'>
                        <div className='tasks-body'>
                            <div className=' task_title pb-3 pt-4' style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>Assigned Tasks</div>
                            <div className='task_body'>
                                <div className='task_body_title mt-5 pb-3'>
                                    <div className='title-select'> <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} /></div>
                                    <div className='title-h1'>Name</div>
                                    <div className='title-h2'>Register No</div>
                                    <div className='title-h3'>Date</div>
                                    <div className='title-h4'>Date</div>
                                    <div className='title-h5'>Complete </div>
                                    <div className='title-select-2'></div>
                                </div>
                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>
                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>
                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>
                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>
                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>

                                <div className='task-inside-body pb-1'>
                                    <div className='title-select'>
                                        <input type='checkbox' style={{ width: '18px', height: '18px', fontSize: '10px' }} className='mt-2' />
                                        <div className='' style={{ cursor: 'pointer' }}> <MdOutlineModeEdit /> </div>
                                    </div>
                                    <div className='title-c1'>
                                        <div>1</div>
                                        <div>prav</div>
                                    </div>
                                    <div className='title-c2'>737722272137</div>
                                    <div className='title-c3'>enter</div>
                                    <div className='title-c4'>enter</div>
                                    <div className='title-c5'>enter </div>
                                    <div className='title-select-2 p-1' style={{ cursor: 'pointer' }}> <RiDeleteBin5Line /> </div>
                                </div>
                                
                                

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Home;