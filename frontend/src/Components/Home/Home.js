import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Brands from './Brands/Brands';
import TopNews from './TopNews/TopNews';

const Home = () => {
    return (
        <div>
            
            <TopNews />
            <Brands />
            <Footer/>
        </div>
    );
};

export default Home;