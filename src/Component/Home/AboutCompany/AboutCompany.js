import React from 'react';
import Company from '../../../img/company.jpeg'

const AboutCompany = () => {
    return (

        <section className="features-service pb-0  pb-md-5 pt-5 bg-light" >
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 mb-4 m-md-0">
                        <img className="img-fluid" src={Company} alt="" />
                    </div>
                    <div className="col-md-5 align-self-center">
                        <p>ABOUT OUR COMPANY</p>
                        <h3>Explore Modern Tiles
                           <br /> Stone & Toilet Services Agency.
                            <br /> We Are Very Popular For This
                            <br /> Type Of Service Providing</h3>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsam nobis enim culpa officiis atque nostrum fuga dolore rem omnis.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutCompany;