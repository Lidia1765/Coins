import { useState, useEffect } from "react";
import { api } from '../api'

export function Dropdown({ search, currentClick, currentExchange }) {
  const [requests, setRequests] = useState([]);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    console.log(search)
    if (search) {
      api.fetchDataCoins(search).then((data) => setRequests(data.data));
      api.fetchDataExc(search).then((data) => setExchanges(data.data));
    }

  }, [search]);

  return (
    <div className="list">
      {requests && (
        <div>
          Assets
          <ul>
            {requests.slice(0, 5).map((req) => (
              <li key={req.id} onClick={() => currentClick(req.id)}>
                {req.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {exchanges && (
        <div>
          Exchages
          <ul>
            {exchanges.slice(0, 5).map((ex) => (
              <li key={ex.id} onClick={() => currentExchange(ex.exchangeId)}>
                {ex.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
