import axios from 'axios';
    
export function getImagesList(search, page) {
    return dispatch => {
        axios.get(
            'https://pixabay.com/api/?key=8506502-fd530cf53ce4c9ff2733ae363&q=' + search + '&image_type=photo&category=food&places&per_page=20&page=' + page
        ).then(response => dispatch ([ {type: 'IMAGES_FETCHED', payload: response.data}]));
    }
}

