import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slideImg1 from '../../../Images/banner_slide_img1.webp';
import slideImg2 from '../../../Images/banner_slide_img2.jpg'
import slideImg3 from '../../../Images/banner_slide_img3.jpg'
import slideImg4 from '../../../Images/banner_slide_img4.png'
const Banner = () => {
  return (
    <div className='mt-5 pt-2'>
      <>
        <Carousel>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src={slideImg1} alt='banner slide img'
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>Get updated about programming</h3>
              <p>Dev News provide updated and latest new about programming. We will help you to be updated.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src={slideImg2} alt='banner slide img'
            />

            <Carousel.Caption className='carousel-caption'>
              <h3>Most popular Programming News Portal</h3>
              <p>According to the alien. Dev News is the most popular programing based web in the Universe.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src={slideImg3}
              alt='banner slide img'
            />

            <Carousel.Caption className='carousel-caption'>
              <h3>Learn Programming from Alien</h3>
              <p>Dev News tech you programming by alien. So that, you can write a program which can make you billionaire. If you learn programming from us, you can meet with Alien.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src={slideImg4}
              alt='banner slide img'
            />

            <Carousel.Caption className='carousel-caption'>
              <h3>Learn NASA hacking Program</h3>
              <p>Dev News tech you world class programing by alien. Then you will able to hack NASA by just HTML. Don't laugh, you know alien can do anything.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
};

export default Banner;