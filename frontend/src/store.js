import { alertReducer } from './reducers/alertReducers'
import { authReducer } from './reducers/authReducers'
import { getListingsReducer, getListingDetail, getListingRealtor } from './reducers/listingsReducers'
import { getAllRealtors, getTopRealtor } from './reducers/realtorsReducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const tokenFromStorage = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): null
const auth = localStorage.getItem('token') ? true: false
const reducer = combineReducers({
  alert: alertReducer,
   auth: authReducer,
   search: getListingsReducer,
   listingDetail: getListingDetail,
   listingRealtor: getListingRealtor,
   allRealtors: getAllRealtors,
   topRealtor: getTopRealtor
})

const initialState = {
  auth:{
    token: tokenFromStorage,
    isAuthenticated: auth,
  },
  search:{
    listings:[]
  },
  listingDetail:{
    listing:{}
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
