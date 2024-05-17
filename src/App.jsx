import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./components/Search.jsx";
import { api } from "./api";
import { Dropdown } from "./components/Dropdown.jsx";
import { Table } from "./components/Table.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20)
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [childData, setChildData] = useState('')
  const [error, setError] = useState('')

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const dataTableCoins = async (limit = 20) => {
    try {
      const res = await api.fetchDataTableCoins(limit)
      setCoins(res.data)
    } catch (e) {
      setError('Faild request')
    }
  };

  const dataTableExc = async (limit = 20) => {
    try {
      const res = await api.fetchDataTableExc(limit)
      setExchanges(res.data)
    } catch (e) {
      setError('Faild request')
    }
  };

  const selectCoin = async (id) => {
    try {
      const res = await api.fetchAsset(id)
      setCoins([res.data])
      setExchanges([res.data])
    } catch (e) {
      setError('Faild request')
    } finally {
      setSearch("")
    }
  };

  const currentExchange = async (exchangeId) => {
    try {
      const res = await api.fetchExchange(exchangeId)
      setExchanges([res.data])
      setCoins([res.data])
    } catch (e) {
      setError('Faild request')
    } finally {
      setSearch("")
    }
  };

  const handleTableChange = (newData) => {
    setChildData(newData)
  }

  const onMore = () => {
    setLimit(limit + 20)
  }

  useEffect(() => {
    dataTableCoins(limit);
    dataTableExc(limit);
  }, [limit]);

  const reload = () => {
    document.location.reload()
  }

  console.log(childData)
  return (
    <main>
      <div className="container">
        <Search search={search} handleInput={handleInput} />

        {search && (
          <Dropdown
            search={search}
            currentClick={selectCoin}
            currentExchange={currentExchange}
          />
        )}

        {((coins.length > 1) && exchanges.length > 1) ? <div>
          <button className="toggle" onClick={() => handleTableChange('coins')}>Coins</button>
          <button className="toggle" onClick={() => handleTableChange('exchanges')}>Exchanges</button>
        </div> :
          <button className="toggle width" onClick={onMore}
          >Clear</button>}

        {error && (
          <div>
            <p>{error}</p>
            <button onClick={reload}>Try again</button>
          </div>
        )}

        {(childData === 'coins' ? coins : exchanges).length > 0 && (
          <Table data={childData === 'coins' ? coins : exchanges} onMore={onMore} />
        )}
      </div>
    </main>
  );
}
