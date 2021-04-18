import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: '#F4FDF8',
    height: '100%'
}
const ManageService = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])

    const handleDelete = (event, id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = 'none'
                }
            })
    }

    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th>Clear services</th>
                                        
                                    </tr>
                                </thead>
                                </table>

                {
                    serviceData.map(services =>
                        <div>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{services.name}</td>
                                        <td>{services.addPrice}</td>
                                        <td> <button onClick={() => handleDelete(event, services._id)}>Delete Item</button></td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>)

                }
            </div>
        </div>
    );
};

export default ManageService;