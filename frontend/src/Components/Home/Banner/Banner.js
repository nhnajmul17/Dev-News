import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div className='mt-5 pt-2'>
      <>
        <Carousel>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/697/714/datas/original.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="outline-danger">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src="https://njbmagazine.com/wp-content/uploads/2020/03/ExpandBusiness-775x500.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className='carousel-caption'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="outline-danger">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100 h-100"
              src="http://www.councilshs2information.org/wp-content/uploads/2021/09/IT-Support-Provider.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className='carousel-caption'>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Button variant="outline-danger">Danger</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
};

export default Banner;