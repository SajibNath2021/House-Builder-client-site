import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}

const BookingList = () => {
//     const { name } = useParams();

//     const [serviceData, setServiceData] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/booksPay/' + name)
//             .then(res => res.json())
//             .then(data => setServiceData(data))

//     }, [])



    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                {/* <div className="row">
                    <div class="col-md-4 text-center card btn ">
                        <img src={serviceData.imageURL} alt="" />
                        <h5 className="mt-3 mb-3">{serviceData.name}</h5>
                        <p className="text-secondary">Price : {serviceData.addPrice}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default BookingList;