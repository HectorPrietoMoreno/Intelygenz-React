import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/header.component';
import NewsItem from '../../components/NewsItem/newsItem.component';
import Search from '../../components/Search/search.component';

const Main = ({data, handleSetNews}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [news, setNews] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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

    const handleOnSearch = value => {
        const filteredOutputItem = data.item.filter(elem =>elem.title[0].toLowerCase().includes(value.toLowerCase()));
        const tempData = {...data};
        tempData.item = filteredOutputItem;
        setFilteredData(tempData);
    }
    const handleClear = () => {
        setFilteredData(data);
    }

    useEffect(() => {
        if (Object.keys(filteredData).length) {
            setTitle(filteredData.title[0]);
            setDescription(filteredData.description[0]);
            const orderedData = orderItemsByPubDate(filteredData.item);
            setNews(orderedData);
            handleSetNews(orderedData);
        }
    }, [filteredData]);

    useEffect(() => {
        if (Object.keys(data).length) {
            setFilteredData(data);
        }
    }, [data]);
    return (
        <React.Fragment>
            <Header title={title} description={description} />
            <Search onSearch={handleOnSearch} handleClear={handleClear}/>
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