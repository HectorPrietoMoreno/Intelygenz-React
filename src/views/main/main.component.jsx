import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';

const Main = () => {
    const [ data, setData ] = useState({});
    useEffect(() => {
        const url = "https://www.xatakandroid.com/tag/feeds/rss2.xml";
        axios.get(url, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then((response) => {
            // parsing xml data
            parseString(response.data, (err, results) => {
                if (err) console.log( 'Parsing Error', err);
                setData(results.rss.channel[0]);
            });
        });
    }, []);
    return (<div>Hello Main: 
        { data && data.title && data.title[0]}
    </div>);
};

export default Main;