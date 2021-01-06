import {
  SEARCH_LISTING_FAIL,
  SEARCH_LISTING_SUCCESS,
  SEARCH_LISTING_LOADING,
  LISTING_DETAIL_LOADING,
  LISTING_DETAIL_FAIL,
  LISTING_DETAIL_SUCCESS,
  LISTING_REALTOR_FAIL,
  LISTING_REALTOR_LOADING,
  LISTING_REALTOR_SUCCESS
} from '../constants/constants';


export const getListingsReducer =(state = { listings: [] }, action) =>{
  const { type, payload } = action;
  switch(type) {
    case SEARCH_LISTING_LOADING:
      return { loading: true, listings: [] }
    case SEARCH_LISTING_SUCCESS:
      return {
        loading: false,
        listings: payload,
        }
    case SEARCH_LISTING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getListingDetail =(state = { listing: { me:[]} }, action) =>{
  const { type, payload } = action;
  switch(type) {
    case LISTING_DETAIL_LOADING:
      return { ...state, loading: true,successDetail:false, }
    case LISTING_DETAIL_SUCCESS:
      //console.log(payload)
      return {
        successDetail:true,
        loading: false,
        listing: payload,
        }
    case LISTING_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const getListingRealtor =(state = { realtor: {} }, action) =>{
  const { type, payload } = action;
  switch(type) {
    case LISTING_REALTOR_LOADING:
      return { loading: true}
    case LISTING_REALTOR_SUCCESS:
      //console.log(payload)
      return {
        success:true,
        loading: false,
        realtor: payload,
        }
    case LISTING_REALTOR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


 