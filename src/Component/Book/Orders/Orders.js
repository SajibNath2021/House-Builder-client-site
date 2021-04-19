import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardNumberElement , CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js';
import { faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const stripePromise = loadStripe('pk_test_51Ie2oUFlv1kVgnJnxJ6mpSN8Ud1OLDTKECb3V9WbWYQZq37COiIBIqwFAUO0BveFTbtizHjefwQYoi6TDje7d3Nk00aPLwieBR');

const containerStyle = {
    backgroundColor: '#F8F9FA',
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
            productName: data.productName,
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
                <p class="badge bg-secondary text-wrap">Confirm To Your Books By File Down Form Carefully & Pay ..Thank You!!</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input class="form-control" name="userName" placeholder="your name" ref={register} required />
                    <br />
                    <input class="form-control" name="email" placeholder="your email" ref={register} required />
                    <br />
                    <h5 ><FontAwesomeIcon icon={faCcStripe}/> Pay With Stripe <FontAwesomeIcon icon={faCcVisa}/> </h5>
                    
                    <Elements stripe={stripePromise} >
                        <p class="badge bg-success text-wrap">Enter Card Number</p>
                        <CardNumberElement
                            options={{ 
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </Elements>
                    <p class="badge bg-success text-wrap">Expiration Date</p>
                    <Elements stripe={stripePromise} >
                        < CardExpiryElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </Elements>
                    <p class="badge bg-success text-wrap">CVC Code</p>
                    <Elements stripe={stripePromise} >
                        < CardCvcElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </Elements>
                    
                    <br />
                    <p name="productName" >Your Product Name :<span className="fw-bold"> {serviceData.name}</span></p>
                    <p name='price' >Your Service Charge Will Be : <span className="fw-bold"> {serviceData.addPrice}</span> </p>
                    <input class="btn btn-primary" type="submit" />
                </form>


            </div>
        </div>
    );
};

export default Orders;