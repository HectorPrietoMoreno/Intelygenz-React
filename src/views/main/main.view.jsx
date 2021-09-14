import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/header.component';
import NewsItem from '../../components/NewsItem/newsItem.component';

const Main = ({data, handleSetNews}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [news, setNews] = useState([]);

    const orderItemsByPubDate = items => {
        const orderedOutput = [];
        items.forEach(item => {
            if (orderedOutput.length) {
                let i = 0;
                let isDone = false;
                do {
                    if (new Date(item.pubDate) >= new Date(orderedOutput[i].pubDate)) {
                        orderedOutput.unshift(item);
                        isDone = true;
                    } else {
                        i++;
                    }
                } while (isDone || i < orderedOutput.length)
                if (!isDone) orderedOutput.push(item);
            } else {
                orderedOutput.push(item);
            }
        });
        return orderedOutput;
    }

    useEffect(() => {
        if (Object.keys(data).length) {
            setTitle(data.title[0]);
            setDescription(data.description[0]);
            const orderedData = orderItemsByPubDate(data.item);
            setNews(orderedData);
            handleSetNews(orderedData);
        }
    }, [data]);
    return (
        <React.Fragment>
            <Header title={title} description={description} />
            { news.length && news.map((item, index) => <NewsItem key={index} data={item} index={index} />) }
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