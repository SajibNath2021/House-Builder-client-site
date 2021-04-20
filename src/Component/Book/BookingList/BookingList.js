import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingListCard from './BookingListCard';
const containerStyle = {
    backgroundColor: '#F8F9FA',
    height: '100%'
}

const BookingList = () => {   

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const email = loggedInUser.email;
    console.log(email);
    const [booking, setBooking] = useState([]); 
    console.log(booking);
    useEffect(() => {
        fetch(`https://secure-cove-75912.herokuapp.com/bookingList/${email}` )
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])




    return (
    <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8 row">
                <h1>Booking List Page</h1>
                <p class="badge bg-secondary text-wrap" >See Your All Booking </p>
                {
                    booking.map(orderList => <BookingListCard orderList={orderList}></BookingListCard>)
                }
            </div>
        </div>
    
        
    );
};

export default BookingList;