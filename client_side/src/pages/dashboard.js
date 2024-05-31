import React from 'react'
import TopNav from '../components/topNavBar'
import SideNav from '../components/sideNavBar'
import '../styles/dashboard.css'

function Home() {
    return (
        <>
            <div className='top-position'><TopNav /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='dashboard'>
                        <div className='dash-total-box'>
                            <span className='head'> Total Students</span>
                            <span className='number'>90K</span>
                            <div className='head' style={{fontSize:'13px',cursor:'pointer'}}> View all</div>
                        </div>
                        <div className='dash-total-box'>
                            <div className='head'> Total Faculty</div>
                            <div className='number'>90K</div>
                            <div className='head' style={{fontSize:'13px',cursor:'pointer'}}> View all</div>
                        </div>
                        <div className='dash-total-box'>
                            <div className='head'> Total Tasks</div>
                            <div className='number'>90K</div>
                            <div className='head' style={{fontSize:'13px',cursor:'pointer'}}> View all</div>
                        </div>
                        <div className='dash-total-box'>
                            <div className='head'> Total </div>
                            <div className='number'>90K</div>
                            <div className='head' style={{fontSize:'13px',cursor:'pointer'}}> View all </div>
                        </div>
                    </div>
                    <div className='second-dash'>
                        <div className='tasks'>
                            <div className='task-head mt-3 pb-2'><div style={{fontSize:'19px'}}>Recent Tasks</div><div style={{fontSize:'15px'}}>view all</div></div>
                            <div>
                                <div>
                                    <div></div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='tasks'>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home