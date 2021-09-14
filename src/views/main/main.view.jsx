import React, { useEffect, useState } from 'react';

import Header from '../../components/Header/header.component';
import NewsItem from '../../components/NewsItem/newsItem.component';

const Main = ({data}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [news, setNews] = useState([]);
    useEffect(() => {
        if (Object.keys(data).length) {
            setTitle(data.title[0]);
            setDescription(data.description[0]);
            setNews(data.item);
            }
    }, [data]);
    return (
        <React.Fragment>
            <Header title={title} description={description} />
            { news.length && news.map(item => <NewsItem key={item.guid} data={item} />) }
        </React.Fragment>
    ); 
};

export default Main;