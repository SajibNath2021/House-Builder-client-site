import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const containerStyle = {
    backgroundColor: '#F4F7FC',
    height: '100%'
}

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            email: data.email

        }
        const url = `http://localhost:5000/addAdmin`;
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add Admin</h1>
                    <p class="badge bg-success text-wrap">Write Admin Email</p>
                    <div className="form-group ">
                        <input type="text" style={{ marginBottom: '8px' }} className="form-control" name="email" placeholder="Email" ref={register} required />
                    </div>
                    <div className="form-group" >
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;