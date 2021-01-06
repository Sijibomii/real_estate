import axios from 'axios';
import { setAlert } from './alertActions';
import {
    SEARCH_LISTING_FAIL,
    SEARCH_LISTING_LOADING,
    SEARCH_LISTING_SUCCESS,
    LISTING_DETAIL_LOADING,
    LISTING_DETAIL_FAIL,
    LISTING_DETAIL_SUCCESS,
    LISTING_REALTOR_FAIL,
    LISTING_REALTOR_LOADING,
    LISTING_REALTOR_SUCCESS
} from '../constants/constants';

export const searchListing = (sale_type, price, bedrooms, home_type, bathrooms, sqft, days_listed, has_photos, open_house, keywords ) => async dispatch => {
  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
  };
  
  const body = JSON.stringify({ sale_type, price, bedrooms, home_type, bathrooms, sqft, days_listed, has_photos, open_house, keywords });
  dispatch({
    type: SEARCH_LISTING_LOADING
  })
  try {
    const res = await axios.post(`/api/listings/search`, body, config);
    //console.log(res.data)
    dispatch({
        type: SEARCH_LISTING_SUCCESS,
        payload: res.data
    });

  
} catch (err) {
    dispatch({
        type: SEARCH_LISTING_FAIL
    });

    dispatch(setAlert('we can not return listings to you now, please bear with us', 'error'));
}
}

export const getListingDetail = (slug) => async (dispatch,getState) => {
  const {
    auth: { token },
  } = getState()
  //console.log(token)
  const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};
dispatch({
  type: LISTING_DETAIL_LOADING
})
  try{
    const res = await axios.get(`/api/listings/${slug}`, config)
    //console.log(res.data)

    const ress= await axios.get(`/api/realtors/${res.data.realtor}`, config)
    //console.log(ress.data)
    dispatch({
      type: LISTING_DETAIL_SUCCESS,
      payload: res.data
  });
  dispatch({
    type: LISTING_REALTOR_SUCCESS,
    payload: ress.data
  });

  }catch (err) {
    dispatch({
        type: LISTING_DETAIL_FAIL
    });

    dispatch(setAlert('Unable to get this listing', 'error'));
}

}

export const getListingRealtor = (id) => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState()
  const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};
//console.log(localStorage.getItem('token'))
dispatch({
  type: LISTING_REALTOR_LOADING
})

    try{
      const res= await axios.get(`/api/realtors/${id}`, config)
    dispatch({
      type: LISTING_REALTOR_SUCCESS,
      payload: res.data
    });
    }catch(err){
      dispatch({
        type: LISTING_REALTOR_FAIL
    });

    dispatch(setAlert('Unable to get this listing realtor', 'error'));
    
    
  }

}

