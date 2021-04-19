import React, { useEffect, useState } from 'react';

import Sidebar from '../../Shared/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const OrderList = () => {

    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookingList')
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])

   



    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                <h2>All User Order List</h2>
                <p class="badge bg-success text-wrap">Don,t take any info because we provide user data safety priority first !!</p>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">User Email</th>
                    </tr>
                </thead>
                { 
                    booking.map(orderList =>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{orderList.name}</td>
                            <td>{orderList.addPrice}</td>
                            <td>{orderList.email}</td>
                        </tr>
    
                    </tbody>)
                }
                </table>
            </div>
        </div>
    );
};

export default OrderList;