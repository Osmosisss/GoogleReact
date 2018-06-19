import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <div className='app-wrapper-footer'>
                <span className='advertising_left'>
                    <a href=' https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>Advertising</a>
                </span>
                <span className='business_left'>
                    <a href=' https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none'>Bidness</a>
                </span>  
                <span className='right'>

                <span className='privacy_right'>
                    <a href='https://policies.google.com/privacy?hl=en&gl=us'>Privacy</a>
                </span>
                <span className='terms_right'>
                    <a href='https://policies.google.com/terms?hl=en&gl=us'>Terms</a>
                </span>
                <span className='settings_right'>
                    <a href='#'>Settings</a>
                </span>
                </span>
            </div>
        );
    }
}