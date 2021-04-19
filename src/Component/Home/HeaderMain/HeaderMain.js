import React from 'react';
import tiles from '../../../img/grayWallTiles.jpeg';
import bathroom from '../../../img/bathroom.jpeg';
import stone from '../../../img/colorfulStone.jpeg';
import { Link } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main >
            {/* <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 class='welcomeText'>Building Your Quality <br /> of Comfortable Life </h1>
                <p className="smallText">Tiles Stones, Toilet setup agency </p>
                <Link to="" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={kitchen} alt="" className="img-fluid" />
            </div> */}

<div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={stone} class="d-block w-100" alt="..." />
                        <div class='carousel-caption  '>
                            <h1 >WELCOME TO OUR SITE</h1>
                            <h3 class='welcomeText'>Building Your Quality <br /> of Comfortable Life </h3>
                            <p className="smallText">Tiles, Stones, Toilet setup agency </p>
                            <Link to="" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src={tiles} class="d-block w-100" alt="..." />
                        <div class='carousel-caption'>
                        <h1 >WELCOME TO OUR SITE</h1>
                            <h3 class='welcomeText'>Building Your Quality <br /> of Comfortable Life </h3>
                            <p className="smallText">Tiles, Stones, Toilet setup agency </p>
                            <Link to="" className="btn btn-primary">Shop Now</Link>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <img src={bathroom} class="d-block w-100" alt="..." />
                        <div class='carousel-caption'>
                        <h1 >WELCOME TO OUR SITE</h1>
                            <h3 class='welcomeText'>Building Your Quality <br /> of Comfortable Life </h3>
                            <p className="smallText">Tiles, Stones, Toilet setup agency </p>
                            <Link to="" className="btn btn-primary">Shop Now</Link>
                        </div>
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
            </div>
</div>

        
        </main>
    );
};

export default HeaderMain;