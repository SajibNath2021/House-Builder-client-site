import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import { faCog,faUserPlus, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to={`/booksPay/${name}`} className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Books & Pay</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span> 
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;