import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <div >
                <span className='about_left'>
                    <a href='https://www.google.com/intl/en/about/?fg=1&utm_source=google.com&utm_medium=referral&utm_campaign=hp-header'>About</a>
                </span>
                <span className='store_left'>
                    <a href='https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042'>Store</a>
                </span>  
                <span className='right'>        
                <span className='gmail_right'>
                    <a href='http://gmail.com/'>Gmail</a>
                </span>
                <span className='images_right'>
                    <a href='https://www.google.com/imghp?hl=en&tab=wi&authuser=0'>Images</a>
                </span>
                <span className='grid_right'>
                    <a href='#'><i className="fas fa-th"></i></a>
                </span>
                <span className='notification_right'>
                    <a href='#'><i className="fas fa-bell"></i></a>
                </span>
                <span className='user_right'>
                    <a href='https://media.licdn.com/dms/image/C5603AQGqgUCvfX7bmw/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=o4KnCApPwR89OS5t5ivSqBWNe4r1YGlSFMxevo-b6qU'>User</a>
                </span>
                </span>
            </div>
        );
    }
}