import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Parsing library
import { parseString } from 'xml2js';
// Components
import Main from '../Main/main.view';

const MainContainer = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const url = "https://www.xatakandroid.com/tag/feeds/rss2.xml";
        axios.get(url, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then((response) => {
            // parsing xml data
            parseString(response.data, (err, results) => {
                if (err) setIsError(true);
                setData(results.rss.channel[0]);
                setIsLoading(false);
            });
        });
    }, []);
    return (
        <React.Fragment>
            {
                isError ? <div>Error</div> :
                    isLoading ?
                        <div>Loading...</div> :
                        <Main data={data} />
            }
        </React.Fragment>
    );
};

export default MainContainer;