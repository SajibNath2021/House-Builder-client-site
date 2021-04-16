import React from 'react';
import kitchen from '../../../img/kitchen1.jpg';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: '700px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Building Your Quality <br /> of Comfortable Life </h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, expedita! </p>
                <Link to="" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={kitchen} alt="" className="img-fluid" />
            </div>



            {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div >
                            <h1 style={{ color: '#3A4256' }}>Building Your Quality <br /> of Comfortable Life </h1>
                                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, expedita! </p>
                                <Link to="" className="btn btn-primary">Shop Now</Link>
                            </div>
                            
                                <img src={kitchen} class="d-block w-100" alt="..." />
                            
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={kitchen} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={kitchen} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
        </main>
    );
};

export default HeaderMain;