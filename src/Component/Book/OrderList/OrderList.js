import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const containerStyle ={
    backgroundColor: '#F4FDF8',
    height:'100%'
}

const OrderList = () => {
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-8">
                 <h1>OrderList</h1>
            </div>
        </div>
    );
};

export default OrderList;