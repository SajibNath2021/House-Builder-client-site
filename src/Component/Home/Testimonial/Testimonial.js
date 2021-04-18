import React from 'react';


const Testimonial = ({ testimonial }) => {
    const { name, Company, img, Description } = testimonial;
    return (
        <div className="card col-md-4 shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{Company}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{Description}</p>
            </div>

        </div>
    );
};

export default Testimonial;