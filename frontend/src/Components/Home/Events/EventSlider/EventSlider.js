import React, { useEffect } from 'react';
import Slider from 'react-slick';
import EventCard from '../EventCard/EventCard';
import img from '../../../../Images/eventBanner.JPG';
import { useDispatch, useSelector } from 'react-redux';
import { fetchevents } from '../../../../Redux/NewsSlice/NewsSlice';

const EventSlider = () => {
    // const [events, setEvents] = useState([])
    const dispatch = useDispatch()

    /* useEffect(() => {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []) */

    useEffect(() => {
        dispatch(fetchevents())

    }, [dispatch])

    const events = useSelector(state => state.news.events)



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
            {/* <h3 style={{ textAlign: 'center', marginBottom: '40px', }}>Events</h3> */}
            <div>
                <img src={img} class="img-fluid" alt="..."></img>
            </div>
            <div className='p-5'>
                <h3 style={{ textAlign: 'center', marginBottom: '40px', }} className='fw-bold'>Up Coming Events</h3>
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