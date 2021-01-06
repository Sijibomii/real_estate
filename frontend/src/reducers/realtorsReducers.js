import {
  ALL_REALTOR_FAIL,
  ALL_REALTOR_LOADING,
  ALL_REALTOR_SUCCESS,
  TOP_REALTOR_FAIL,
  TOP_REALTOR_LOADING,
  TOP_REALTOR_SUCCESS
} from '../constants/constants';


export const getAllRealtors =(state = { realtors: [] }, action) =>{
  const { type, payload } = action;
  switch(type) {
    case ALL_REALTOR_LOADING:
      return { loading: true, realtors: [] }
    case ALL_REALTOR_SUCCESS:
      return {
        loading: false,
        realtors: payload,
        }
    case ALL_REALTOR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getTopRealtor =(state = { realtor: {} }, action) =>{
  const { type, payload } = action;
  switch(type) {
    case TOP_REALTOR_LOADING:
      return { ...state, loading: true }
    case TOP_REALTOR_SUCCESS:
      //console.log(payload)
      return {
        success:true,
        loading: false,
        realtor: payload,
        }
    case TOP_REALTOR_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
