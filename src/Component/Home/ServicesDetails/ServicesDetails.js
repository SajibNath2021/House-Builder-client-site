import React from 'react';
import { useHistory } from 'react-router';

const ServicesDetails = ({ service }) => {
    const {name, addPrice, imageURL, email} = service;
    console.log(email);
    const history = useHistory();
    const handleBook =()=>{
        history.push(`/booksPay/${name}`)
    }
    return (
        
            <div onClick={handleBook} class="col-md-4 text-center card btn ">
                <img  src={imageURL} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
                <p className="text-secondary">Price : {addPrice}</p>
            </div>
        
    );
};

export default ServicesDetails;