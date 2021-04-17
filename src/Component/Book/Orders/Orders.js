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

    const onSubmit =()=>{

    }

    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                <div className="row">
                    <div class="col-md-4 card  ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input name="name" placeholder="product name" ref={register} />
                            <br />
                            <input name="addPrice" placeholder="add price" ref={register} />
                            <br />
                            <input name="addPrice" placeholder={serviceData.name} ref={register} />
                            <br />
                            <p className="text-secondary">Product Name : {serviceData.name}</p>
                            <br />
                            <p className="text-secondary">Price : {serviceData.addPrice}</p>
                            <input type="submit" />
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;