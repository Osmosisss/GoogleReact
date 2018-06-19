import {
    SET_RESULTS_LINKS
} from "./type";

import axios from 'axios';

export function fetchResultsLinks() {
    return function(dispatch) {
        axios.get('https://rails.devcamp.com/public-profile/oswaldo-ortiz3401')
        .then(response => {
            dispatch({
                type: SET_RESULTS_LINKS,
                payload: response.data.links
            })
        })
    }
}