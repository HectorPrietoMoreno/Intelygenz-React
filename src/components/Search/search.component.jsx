import React, { useState } from 'react';

import './search.styles.css';

const Search = ({onSearch, handleClear}) => {
    const [ inputValue, setInputValue ] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleClick = () => {
        onSearch(inputValue);
    }
    const handleClearButton = () => {
        setInputValue('');
        handleClear();
    }
    return (
        <div className="searchContainer">
            <input name="search" value={inputValue} placeholder="Busca..." className="input" onChange={handleInputChange}/>
            <button className="button" disabled={!inputValue.length} onClick={handleClick}>Buscar</button>
            <button className="button" onClick={handleClearButton}>Limpiar Busqueda</button>
        </div>
    );
};

export default Search;