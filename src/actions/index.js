import * as actionTypes from './actionTypes';

export const downloadListRequest = () => (
  {type: actionTypes.DOWNLOAD_LIST_REQUEST}
);
export const downloadListSuccess = (list) => (
  {type: actionTypes.DOWNLOAD_LIST_SUCCESS, payload: list}
);
export const downloadListFailure = (error) => (
  {type: actionTypes.DOWNLOAD_LIST_FAILURE, payload: error}
);
export const downloadDetailsRequest = (itemId) => (
  {type: actionTypes.DOWNLOAD_DETAILS_REQUEST, payload: itemId}
);
export const downloadDetailsSuccess = (details) => (
  {type: actionTypes.DOWNLOAD_DETAILS_SUCCESS, payload: details}
);
export const downloadDetailsFailure = (error) => (
  {type: actionTypes.DOWNLOAD_DETAILS_FAILURE, payload: error}
);
