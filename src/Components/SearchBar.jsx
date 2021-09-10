import React, { Component } from 'react'
import icon from '../Images/search-bar-icon2.png'

const SearchBar = (props) => {
    //const {handleSearchUser} = this.props
    return (
        <div className="search-bar-container">
            <img className="search-bar-icon" src={icon} alt="search-bar-icon"/>
            <input 
                className="search-bar" 
                type="text" 
                placeholder="Search for users"               
            />
        </div>
    )
}

export default SearchBar
