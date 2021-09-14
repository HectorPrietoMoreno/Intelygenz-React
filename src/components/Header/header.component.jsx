import React from 'react';
import './header.styles.css';

const Header = ({ title, description, pubDate }) => (
    <div className="headerContainer">
        <div className="headerTitle">{title}</div>
        <div>{description}</div>
    </div>
);

export default Header;