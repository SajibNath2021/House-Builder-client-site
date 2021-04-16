import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";


const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
            <form action="" >
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" placeholder="name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" placeholder="Company" />
                        </div>
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                cols="20"
                                rows="4"
                                placeholder="Description *"
                            />
                        </div>
                        <div className="form-group" >
                            <button type="button"  className="btn btn-primary"style={{width:'30%'}} >Submit</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Review;