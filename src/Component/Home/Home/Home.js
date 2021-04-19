import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            
        <Header></Header>
        <AboutCompany></AboutCompany>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;