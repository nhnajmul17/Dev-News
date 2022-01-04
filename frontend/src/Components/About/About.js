import React from 'react';
import Header from '../Shared/Header/Header';
import './About.css';
import aboutImg from '../../Images/aboutImage.jpg'
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header/>
            <div className='about__section'>
                <div className='about__image'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='About__text'>
                    <h2>About Dev News</h2>
                    <p>Dev News mainly for developer where developer find top recent news about programming and developing. This site was made in 2000 and still it the most popular news portal site for every developer. Dev News always trying to provide best and latest news for all developer in the world. If you want to stay up to date about developing. your are most welcome to Dev News. When we started Dev News, our goal was to give anyone in the world the ability to learn the skills they'd need to succeed in the 21st century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped millions of people worldwide unlock modern technical skills and reach their full potential through code.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;