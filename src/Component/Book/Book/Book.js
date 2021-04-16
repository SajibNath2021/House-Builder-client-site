import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookMain from '../BookMain/BookMain';

const Book = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br/>
            <BookMain></BookMain>
        
            <Footer></Footer>
        </div>
    );
};

export default Book;