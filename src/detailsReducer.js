import { DOWNLOAD_DETAILS_REQUEST, DOWNLOAD_DETAILS_SUCCESS,
         DOWNLOAD_DETAILS_FAILURE } from './actions/actionTypes';

const initialState = {
  loading: false,
  itemId: null,
  error: null,
  details: null
};

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_DETAILS_REQUEST:
      return {...state, loading: true, itemId: action.payload};
    case DOWNLOAD_DETAILS_SUCCESS:
      return {...state, loading: false, error: null, details: action.payload};
    case DOWNLOAD_DETAILS_FAILURE:
      return {...state, loading: false, error: action.payload, details: null};
    default:
      return state;
  }
}
