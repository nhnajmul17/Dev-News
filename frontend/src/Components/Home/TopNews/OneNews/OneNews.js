import React from 'react';
import './OneNews.css';

const OneNews = (props) => {
    const { id, headLine, photoUrl, Description } = props.news;
    return (
        <div className='single__top__news'>
            <div className='top__news__img'>
                <img src={photoUrl} alt="news banner" />
            </div>
            <div className='top__news__text'>
                <h5>{headLine.slice(0,30)}</h5>
                <p>{ Description.slice(0,50)} <span>see more</span>...</p>
            </div>
        </div>
    );
};

export default OneNews;