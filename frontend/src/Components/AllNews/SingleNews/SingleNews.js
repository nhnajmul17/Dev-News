import React from 'react';
import './SingleNews.css';
import { useNavigate } from 'react-router-dom';


const SingleNews = (props) => {
    const { _id, headLine, photoUrl, description } = props.news;
    const navigate = useNavigate();
    const newsDetails = () => {
        navigate(`/home/${_id}`)
    }
    return (
        <div className='single__top__news'>
            <div className='top__news__img'>
                <img src={photoUrl} alt="news banner" />
            </div>
            <div className='top__news__text'>
                <h5>{headLine.slice(0, 30)}</h5>
                <p>{description.slice(0, 50)} <span onClick={newsDetails} >see more</span>...</p>
            </div>
        </div>
    );
};

export default SingleNews;