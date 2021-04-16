import React from 'react';
import { useHistory } from 'react-router';

const ServicesDetails = ({ service }) => {
    const {name} = service;
    const history = useHistory();
    const handleBook =()=>{
        history.push(`/book/${name}`)
    }
    return (
        
            <div onClick={handleBook} class="col-md-4 text-center card btn ">
                <img  src={service.img} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">Price : $ 40</p>
            </div>
        
    );
};

export default ServicesDetails;