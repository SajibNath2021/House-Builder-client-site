import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const containerStyle ={
    backgroundColor: '#F4FDF8',
    height:'100%'
}
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
            <h2>this is admin</h2>
                    <form >

                        <input name="name" placeholder="product name" ref={register} />
                        <br />
                        <input name="addPrice" placeholder="add price" ref={register} />
                        <br />
                        <input name="exampleRequired" type='file'  />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
       
    );
};

export default AddService;