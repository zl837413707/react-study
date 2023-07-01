import { createStore, combineReducers } from 'redux'

// import thunk from 'react-thunk'

import countReducer from './reducers/count'
import PersonReducer from './reducers/person'

const allReducer = combineReducers({
  add: countReducer,
  perosonadd: PersonReducer

})



export default createStore(allReducer)