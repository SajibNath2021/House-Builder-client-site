import React, { useState } from 'react';
import axios from 'axios';

import Sidebar from '../../Shared/Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: '#F4FDF8',
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
        const url = `http://localhost:5000/addServices`;
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
                <h2>this is admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" placeholder="product name" ref={register} />
                    <br />
                    <input name="addPrice" placeholder="add price" ref={register} />
                    <br />
                    <input name="exampleRequired" type='file' onChange={handleImage} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>

    );
};

export default AddService;