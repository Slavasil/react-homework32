import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { downloadDetailsRequest } from './actions';

export default function Details() {
  const {id: itemId} = useParams();
  const details = useSelector(state => state.details);
  const dispatch = useDispatch();
  const fetchDetails = () => {
    dispatch(downloadDetailsRequest(itemId));
  }
  useEffect(() => {
    fetchDetails();
  }, []);

  return (details.loading ? (<div className="loading">Идёт загрузка...</div>) :
    (details.error == null ?
      (details.details != null &&
        <div className="details">
          <div>{details.details.name} &mdash; {details.details.price} руб.</div>
          <hr/>
          <div>{details.details.content}</div>
        </div>
      ) :
      (<div className="download-error">
        <span>Произошла ошибка!</span>
        <button onClick={fetchDetails}>повторить</button>
      </div>)
    )
  );
}
