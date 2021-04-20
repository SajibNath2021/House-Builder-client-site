import React, { useEffect, useState } from 'react';
import tiles from '../../../img/tiles.jpeg';
import toilet from '../../../img/morderToilet.jpeg';
import bathroom from '../../../img/bathroom.jpeg';
import grayTiles from '../../../img/grayWallTiles.jpeg';
import stoneTiles from '../../../img/colorfulStone.jpeg'
import ServicesDetails from '../ServicesDetails/ServicesDetails';



const Services = () => {
    const [serviceData, setServiceData] = useState([]);
  
    useEffect(() => {
        fetch('https://secure-cove-75912.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
        
    }, [])
    return (
        <section class="services-container pt-5 pb-5 bg-light">
            <div class="text-center">
                <h5 class="text-primary">Our Latest Product</h5>
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