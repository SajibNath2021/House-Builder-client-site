import React from 'react';

import './Contact.css'
const Contact = () => {
    return (
        <section className="contact  py-5">
            <h5 className="text-primary text-center  mb-1">Contact</h5>
            <h3 className="text-white text-center  mb-5">Always Connect With US</h3>
            <div className="container">
            <div className=" row ">
                <div className=" col-md-6 align-self-center section-header text-center text-white  mb-5 ">

                    <h1> Need Any Helps For Modern
                      <br/> Tiles & Toilet Join Us</h1>
                    <p>WE ARE AVAILABLE TO HELP YOU EVERY STEP OF THE WAY
                  <br />  WITH YOUR HOUSE PROJECT.</p>
                  <small className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur necessitatibus qui pariatur distinctio praesentium cupiditate inventore illo doloribus voluptatibus mollitia.</small>


                </div>
                <div className="col-md-6 mx-auto">
                    <form action="" >
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" style={{marginBottom:'8px'}} className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group" style={{marginBottom:'10px'}}>
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                cols="30"
                                rows="8"
                                placeholder="Message *"
                            />
                        </div>
                        <div className="form-group text-center" >
                            <button type="button"  className="btn btn-primary"style={{width:'100%'}} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;