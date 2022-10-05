import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { downloadListRequest } from './actions';

export default function List() {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchList = () => {
    dispatch(downloadListRequest());
  }
  useEffect(() => {
    fetchList();
  }, []);
  const goToDetails = id => {
    navigate(`${id}/details`);
  };

  return (list.loading ? (<div className="loading">Идёт загрузка...</div>) :
    (list.error == null ?
      (list.list != null &&
        <table className="services-table" border="1">
          <thead>
            <tr>
              <td>Услуга</td>
              <td>Стоимость</td>
            </tr>
          </thead>
          <tbody>
            {list.list.map((e) => <tr key={e.id} onClick={()=>goToDetails(e.id)}>
              <td>{e.name}</td>
              <td>{e.price} руб.</td>
            </tr>)}
          </tbody>
        </table>
      ) :
      (<div className="download-error">
        <span>Произошла ошибка!</span>
        <button onClick={fetchList}>повторить</button>
      </div>)
    )
  );
}
