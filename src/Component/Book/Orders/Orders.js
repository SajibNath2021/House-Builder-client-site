import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const containerStyle ={
    backgroundColor: '#F4FDF8',
    height:'100%'
}

const Orders = () => {
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                 <h1>this is order</h1>
            </div>
        </div>
    );
};

export default Orders;