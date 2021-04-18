import React, { useContext } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            Company: data.Company,
            Description: data.Description,
            img: loggedInUser.photoURL

        }
        const url = `http://localhost:5000/addReview`;
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
                <h1>Review</h1>
                <p>Plz Submit Your Review & Give Us Chance To Improve..Thank You!!</p>
            <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" name="name" placeholder="name" ref={register} />
                        </div>
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" name="Company" placeholder="Company Name" ref={register} />
                        </div>
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <textarea
                                name="Description"
                                className="form-control"
                                id=""
                                cols="20"
                                rows="4"
                                placeholder="Description"
                                ref={register}
                            />
                        </div>
                        <div className="form-group" >
                        <input  type="submit" />
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Review;