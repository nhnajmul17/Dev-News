import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneNews.css';

const OneNews = (props) => {
    const { id, headLine, photoUrl, Description } = props.news;
    const navigate = useNavigate();
    const newsDetails = () => {
        navigate(`/home/${id}`)
    }
    return (
        <div className='single__top__news'>
            <div className='top__news__img'>
                <img src={photoUrl} alt="news banner" />
            </div>
            <div className='top__news__text'>
                <h5>{headLine.slice(0,30)}</h5>
                <p>{ Description.slice(0,50)} <span onClick={newsDetails} >see more</span>...</p>
            </div>
        </div>
    );
};

export default OneNews;