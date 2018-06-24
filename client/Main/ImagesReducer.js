const INITIAL_STATE = {imagesList:{}};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'IMAGES_FETCHED':
            return { ...state, imagesList: action.payload }
        default:
            return state
    }
}