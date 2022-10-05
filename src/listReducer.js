import { DOWNLOAD_LIST_REQUEST, DOWNLOAD_LIST_SUCCESS, DOWNLOAD_LIST_FAILURE } from './actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  list: null
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_LIST_REQUEST:
      return {...state, loading: true};
    case DOWNLOAD_LIST_SUCCESS:
      return {...state, loading: false, error: null, list: action.payload};
    case DOWNLOAD_LIST_FAILURE:
      return {...state, loading: false, error: action.payload, list: null};
    default:
      return state;
  }
}
