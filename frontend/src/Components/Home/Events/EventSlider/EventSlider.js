import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import EventCard from '../EventCard/EventCard';
import img from '../../../../images/eventBanner.JPG'

const EventSlider = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h3>Events</h3>
            <div>
                <Carousel fade hidden-xs variant="dark">
                    <Carousel.Item>
                        <Carousel.Caption className="overflow-hidden">
                            <p className='fw-bold '>City of London</p>
                            <h1 className='fw-bold fst-italic text-white'>PHP UK CONFERENCE</h1>
                            <p className='fw-bold '><small>16th February 2022</small></p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='p-5'>
                <h3>Up Coming Events</h3>
                <Slider {...settings}>
                    {
                        events.map(event => <EventCard key={event.key} event={event}></EventCard>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default EventSlider;