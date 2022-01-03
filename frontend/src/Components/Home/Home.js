import React from 'react';
import Publishing from '../../Publishing/Publishing';
import Banner from './Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Brands from './Brands/Brands';
import TopNews from './TopNews/TopNews';
import EventSlider from './Events/EventSlider/EventSlider';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <TopNews />
            <EventSlider></EventSlider>
            <Publishing></Publishing>
            <Brands />
            <Footer />

        </div>
    );
};

export default Home;