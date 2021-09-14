import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/header.component';
import NewsItem from '../../components/NewsItem/newsItem.component';

const Main = ({data, handleSetNews}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [news, setNews] = useState([]);
    useEffect(() => {
        if (Object.keys(data).length) {
            setTitle(data.title[0]);
            setDescription(data.description[0]);
            setNews(data.item);
            handleSetNews(data.item);
            }
    }, [data]);
    return (
        <React.Fragment>
            <Header title={title} description={description} />
            { news.length && news.map(item => <NewsItem key={item.guid} data={item} />) }
        </React.Fragment>
    ); 
};

const mapDispatchToProps = dispatch => {
    return {
        handleSetNews: (payload) => dispatch({ type: 'SET_NEWS', payload })
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Main);