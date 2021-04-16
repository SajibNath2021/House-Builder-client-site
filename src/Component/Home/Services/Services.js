import React from 'react';
import tiles from '../../../img/tiles.jpeg';
import toilet from '../../../img/morderToilet.jpeg';
import bathroom from '../../../img/bathroom.jpeg';
import grayTiles from '../../../img/grayWallTiles.jpeg';
import stoneTiles from '../../../img/colorfulStone.jpeg'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: tiles
    },
    {
        name: 'Cavity Filling',
        img: toilet
    },
    {
        name: 'Teeth Whitening',
        img: bathroom
    },
    {
        name: 'Teeth Whitening',
        img: grayTiles
    },
    {
        name: 'Teeth Whitening',
        img: stoneTiles
    }
]

const Services = () => {
    return (
        <section class="services-container pt-5 pb-5 bg-light">
            <div class="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Latest Product</h5>
                <h2>Explore Our Tiles Toilet & <br/> Stone Shop</h2>
            </div>
            <div class="d-flex justify-content-center ">
                <div class="row w-75 mt-5 ">
                    {
                        serviceData.map(service => <ServicesDetails service={service} key={service.name}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;