import { ajax } from 'rxjs/ajax';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ofType } from 'redux-observable';
import {
  DOWNLOAD_LIST_REQUEST,
  DOWNLOAD_DETAILS_REQUEST
} from './actions/actionTypes';
import { downloadListSuccess, downloadListFailure, downloadDetailsSuccess, downloadDetailsFailure } from './actions';

export const downloadListEpic = actionStream => actionStream.pipe(
  ofType(DOWNLOAD_LIST_REQUEST),
  exhaustMap(() =>
    ajax.getJSON('http://localhost:8083/api/services').pipe(
      map(response => downloadListSuccess(response)),
      catchError(error => of(downloadListFailure(error)))
    )
  )
);
export const downloadDetailsEpic = actionStream => actionStream.pipe(
  ofType(DOWNLOAD_DETAILS_REQUEST),
  map(action => action.payload),
  exhaustMap(id => 
    ajax.getJSON('http://localhost:8083/api/services/'+id).pipe(
      map(response => downloadDetailsSuccess(response)),
      catchError(error => of(downloadDetailsFailure(error)))
    )
  )
);
