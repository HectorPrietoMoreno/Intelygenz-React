import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './newsItem.styles.css';

const NewsItem = ({data, index}) => {

    const history = useHistory();
    const [ imageSrc, setImageSrc ] = useState('');

    useEffect(() => {
        const el = document.createElement( 'html' );
        el.innerHTML = data.description;
        const srcValue = el.querySelector('img').getAttribute('src');
        setImageSrc(srcValue);
    }, [data]);

    const handleClick = () => {
        history.push(`/details/${index}`);
    }
    
    return (
        <div className="itemContainer" onClick={handleClick}>
            <section className="info">
                <div className="title">{data.title}</div>
                <div className="author">{data.author}</div>
            </section>
            <img className="image" alt="descriptive" src={imageSrc}/>
        </div>
    );
};

export default NewsItem;