import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import './details.styles.css';

const Details = ({news}) => {
    const [ data, setData ] = useState({title: '', author: '', description: ''});
    let { index } = useParams();

    useEffect(() => {
        if (news.length) {
            setData(news[index]);
        }
    }, []);
    
    return (
        <div>
            <div className="title">{data.title}</div>
            <div className="author">Author: {data.author}</div>
            <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
    );
    
};

const mapStateToProps = (state) => {
    return { news: state.news }
};

export default connect(
    mapStateToProps
)(Details);