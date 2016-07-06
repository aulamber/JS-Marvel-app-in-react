import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import heroesReducer from './heroes'

const rootReducer = combineReducers({
  heroesReducer,
  routing: routerReducer,
})

export default rootReducer
