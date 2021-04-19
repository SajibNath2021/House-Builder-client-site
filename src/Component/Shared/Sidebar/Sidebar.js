import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import { faUserPlus, faSignOutAlt, faShoppingBag, faShoppingCart, faPlus, faComment, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const { name, email } = useParams();
    console.log(name);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/Admin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, [loggedInUser.email]);


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <Link style={{ color: 'white' }} class="nav-link active" aria-current="page" to='/'>
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
                <br />
                {!isAdmin && (
                    <div>


                        <li>
                            <Link to={`/booksPay/${name}`} className="text-white">
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>Books & Pay</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/bookingList' className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-white">
                                <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>)}
                {isAdmin && (
                    <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white" >
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageService" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
            <div>
                <Link to="/" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;