import React from 'react';

const BookingListCard = ({ orderList }) => {
    return (

        <div class="col-md-4 text-center card btn ">
            <img src={orderList.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{orderList.name}</h5>
            <p className="text-secondary">Price : {orderList.addPrice}</p>
        </div>
    );
};

export default BookingListCard;