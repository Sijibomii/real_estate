import axios from 'axios';
import { setAlert } from './alertActions';
import {
    ALL_REALTOR_FAIL,
    ALL_REALTOR_LOADING,
    ALL_REALTOR_SUCCESS,
    TOP_REALTOR_FAIL,
    TOP_REALTOR_LOADING,
    TOP_REALTOR_SUCCESS
} from '../constants/constants';
export const getAllRealtorsandTopSeller = () => async (dispatch,getState) => {
  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
      dispatch({
        type:  ALL_REALTOR_LOADING
      })
      dispatch({
        type:  TOP_REALTOR_LOADING
      })

    try {
        const res = await axios.get(`/api/realtors/`, config);
        dispatch({
          type: ALL_REALTOR_SUCCESS,
          payload: res.data
      });
      const ress = await axios.get(`/api/realtors/topseller`, config);
      dispatch({
        type: TOP_REALTOR_SUCCESS,
        payload: ress.data
    });
    }
    catch (err) {
      dispatch({
        type: TOP_REALTOR_FAIL
      })
      dispatch({
        type: ALL_REALTOR_FAIL
      })
      dispatch(setAlert('Unable load realtors info', 'error'));
    }

    
}

