import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <img src="/assets/img/google.png" alt="Google Logo" width="300px"/>
                </div>
                <div className="search-box">
                    <input className="placeholder" type="text" placeholder="Search Google or type URL"></input>
                    <button><img src="/assets/img/mic.png" className="mic_img" alt="Mic Logo" height="40px" width="32px"/></button>
                </div>
                <div className="search-buttons" >
                   <a href="#" className="buttonOne">Google Search</a>
                   <a href="#" className="buttonTwo">I'm Feeling Lucky</a>
                </div>
            </div>
        )
    } 
}

export default SearchBar;