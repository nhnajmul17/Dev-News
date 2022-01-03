import React, { useEffect, useState } from 'react';
import OneNews from './OneNews/OneNews';
import './TopNews.css';

const TopNews = () => {
    const [topNews, setTopNews] = useState([]);

    useEffect(() => {
        fetch('./NewsData.json')
            .then(res => res.json())
            .then(data => setTopNews(data.slice(0, 6)));
    }, [topNews]);
    return (
        <div className='topNews__Section'>
            <div className='topNews__Headline'>
                <h1>Todays Top News</h1>
            </div>
            <div className='all__Newses'>
                {
                    topNews.map(news => <OneNews
                        key={news.id}
                        news={news}
                    
                    ></OneNews>)
                }
            </div>
        </div>
    );
};

export default TopNews;