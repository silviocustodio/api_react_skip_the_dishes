import { combineReducers } from 'redux'
import ImagesReducer from './Main/ImagesReducer'

const rootReducer = combineReducers({ 
    images: ImagesReducer,
})

export default rootReducer