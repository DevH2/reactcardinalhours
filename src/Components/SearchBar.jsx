import React, { Component, useState } from 'react'
import icon from '../Images/search-bar-icon2.png'

const SearchBar = (props) => {
    const {handleSearchText} = props
    return (
        <div className="search-bar-container">
            <img className="search-bar-icon" src={icon} alt="search-bar-icon"/>
            <input 
                className="search-bar" 
                type="text" 
                placeholder="Search for users"      
                onChange={event => {handleSearchText(event.target.value)}}     
            />
        </div>
    )
}

export default SearchBar
