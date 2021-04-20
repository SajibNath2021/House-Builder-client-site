import React, { useState } from 'react';
import axios from 'axios';

import Sidebar from '../../Shared/Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: '#F4F7FC',
    height: '100%'
}
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            addPrice: data.addPrice,
            imageURL: imageUrl

        }
        const url = 'https://secure-cove-75912.herokuapp.com/addServices';
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

    const handleImage = event => {
        const imageData = new FormData();
        imageData.set('key', '6527a575cd6e5fa78760d4b66d8e3e0f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                <h1>Add New Services</h1>
                <p class="badge bg-success text-wrap">Add new service & get more profit</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='form-control' name="name" placeholder="product name" ref={register} required/>
                    <br />
                    <input className='form-control' name="addPrice" placeholder="add price" ref={register} required />
                    <br />
                    <input className='form-control' name="exampleRequired" type='file' onChange={handleImage} required/>
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>

    );
};

export default AddService;