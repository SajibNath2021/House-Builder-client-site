import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingListCard from './BookingListCard';
const containerStyle = {
    backgroundColor: '#F8F9FA',
    height: '100%'
}

const BookingList = () => {
    const { email } = useParams();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`https://secure-cove-75912.herokuapp.com/bookingList?`+ email)
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