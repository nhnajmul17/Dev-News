import React from 'react';
import './Brands.css';
import brand1 from '../../../Images/hacker-news.png'
import brand2 from '../../../Images/dzone-logo.png'
import brand3 from '../../../Images/reddit-logo.png'
import brand4 from '../../../Images/sitePoint-logo.png'
import brand5 from '../../../Images/slashdot-logo.png'
import brand6 from '../../../Images/stackExchange-logo.png'

const Brands = () => {
    return (
        <div className='brands__section'>
            <div className='brand'>
                <img src={brand1} alt="" />
            </div>
            <div className='brand'>
                <img src={brand2} alt="" />
            </div>
            <div className='brand'>
                <img src={brand3} alt="" />
            </div>
            <div className='brand'>
                <img src={brand4} alt="" />
            </div>
            <div className='brand'>
                <img src={brand5} alt="" />
            </div>
            <div className='brand'>
                <img src={brand6} alt="" />
            </div>
        </div>
    );
};

export default Brands;