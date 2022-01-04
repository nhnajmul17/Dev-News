import React from 'react';
import Publishing from '../../Publishing/Publishing';
import Banner from './Banner/Banner';  
import Footer from '../Shared/Footer/Footer';
import Brands from './Brands/Brands';
import TopNews from './TopNews/TopNews';
import EventSlider from './Events/EventSlider/EventSlider';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TopNews />
            <Publishing></Publishing>
            <EventSlider></EventSlider>
            <Brands />
            <Footer/>
        </div>
    );
};

export default Home;