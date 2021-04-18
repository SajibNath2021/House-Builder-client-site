import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import BookingListCard from './BookingListCard';
const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const BookingList = () => {

    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBooking')
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
                <p>See Your All Booking </p>
                {
                    booking.map(orderList => <BookingListCard orderList={orderList}></BookingListCard>)
                }
            </div>
        </div>
    );
};

export default BookingList;