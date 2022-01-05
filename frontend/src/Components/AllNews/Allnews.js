
import React, { useEffect } from 'react';
import SingleNews from './SingleNews/SingleNews';
import './Allnews.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllnews, setNews } from '../../Redux/NewsSlice/NewsSlice';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer';

const Allnews = () => {
    /* const [items, setItems] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/NewsData.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setItems(data);
                console.log(data);
            })
    }, [])
 */
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllnews())
    }
        , [dispatch])

    const news = useSelector(state => state.news.allNews)
    const items = useSelector(state => state.news.allNewsItem)


    const handleCategory = (categoryitem) => {
        const newItem = items.filter(item => item.category === categoryitem)
        dispatch(setNews(newItem))

    }
    console.log(news);
    return (
        <>
            <Header></Header>

            <div className='topNews__Section'>
                <div className='topNews__Headline'>
                    <h1>All News</h1>
                </div>
                <div className=' mt-3 mb-5 d-flex justify-content-center'>
                    <button className='btn btn-warning me-3' onClick={() => handleCategory('javaScript')}>JavaScript</button>
                    <button className='btn btn-warning me-3' onClick={() => handleCategory('python')}>Python</button>
                    <button className='btn btn-warning me-3' onClick={() => handleCategory('java')}>Java</button>
                    <button className='btn btn-warning me-3' onClick={() => handleCategory('php')}>PHP</button>
                    <button className='btn btn-warning me-3' onClick={() => handleCategory('c++')}>C++</button>
                </div>

                <div className='all__Newses'>
                    {
                        news.map(news => <SingleNews
                            key={news._id}
                            news={news}

                        ></SingleNews>)
                    }
                </div>


            </div>
            <Footer></Footer>
        </>
    );
};

export default Allnews;