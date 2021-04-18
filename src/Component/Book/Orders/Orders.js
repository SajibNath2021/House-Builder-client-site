import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const Orders = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const { name } = useParams();

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booksPay/' + name)
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])

    const onSubmit = data => {
        const eventData = {
            ...serviceData,
           userName: data.userName,
            email: data.email,
            productName:data.productName,
            price: data.price,
           
            

        }
        const url = `http://localhost:5000/payOrders`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side respond', res))
    };
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                     <h1>Books & Pay</h1>
                     <p>Confirm To Your Books By File Down Form Carefully & Pay ..Thank You!!</p>
                    
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input class="form-control" name="userName" placeholder="your name" ref={register} required />
                            <br />
                            <input class="form-control" name="email" placeholder="your email" ref={register} required />
                            <br />
                            {/* <input name="productName" placeholder={serviceData.name} ref={register} />
                            <br /> */}
                            <p name="productName" className="text-secondary">Product Name : {serviceData.name}</p>
                            <br />
                            <p name= 'price' className="text-secondary">Your Service Charge Will Be : {serviceData.addPrice}</p>
                            <input class="btn btn-primary" type="submit" />
                        </form>
                        
                    
            </div>
        </div>
    );
};

export default Orders;