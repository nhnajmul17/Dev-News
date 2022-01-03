import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Brands from './Brands/Brands';
import TopNews from './TopNews/TopNews';
import EventSlider from './Events/EventSlider/EventSlider';

const Home = () => {
    return (
        <div>
            
            <TopNews />
            <EventSlider></EventSlider>
            <Brands />
            <Footer/>
        </div>
    );
};

export default Home;