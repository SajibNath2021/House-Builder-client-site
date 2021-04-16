import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const BookMain = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            
            <div className="col-md-8">
               
            </div>
        </div>
    </section>
    );
};

export default BookMain;