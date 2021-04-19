import React from 'react';
import { useHistory } from 'react-router';
import './ServicesDetails.css'

const ServicesDetails = ({ service }) => {
    const { name, addPrice, imageURL, email } = service;
    console.log(email);
    const history = useHistory();
    const handleBook = () => {
        history.push(`/booksPay/${name}`)
    }
    return (

        <div onClick={handleBook} class="col-md-4 text-center card btn ">
            <img src={imageURL} alt="" class="image" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">Price : {addPrice}</p>
            <div class="overlay">
                <h1 class="text">Click To Bye</h1>

            </div>
        </div>

    );
};

export default ServicesDetails;