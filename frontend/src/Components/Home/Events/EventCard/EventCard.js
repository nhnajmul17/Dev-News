import React from 'react';
import './EventCard.css'

const EventCard = ({ event }) => {
    const { img, title, date, location } = event

    return (

        <div className='card-item'>

            <div className='card-inner'>
                <div className='card-image'>
                    <div className="card-top">
                        <img src={img} alt={title} />
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{title}</h4>
                        <h5>{date}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default EventCard;