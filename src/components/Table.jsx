
import "../App.css";
import { transformeObj } from '../helpers'
import { Link } from "react-router-dom";

export function Table({ data, onMore }) {
  const unwraped = (array) => {
    return array.map(value => Object.entries(transformeObj(value)))
  }

  function addSpace(string) {
    let b = string.split('');
    for (let i = 0; i < b.length; i++) {
      if (b[i] === b[i].toUpperCase()) {
        b.splice(i, 1, ' ' + b[i]);
      }
    }
    return b.join('');
  }

  function getLink(value, field) {
    if (typeof value === 'string' && value.includes('https://')) {
      return <a href={value}>{value}</a>
    }

    if (field === 'id') {
      return <Link to={`/coin/${value}`}>{value}</Link>
    }

    if (field === 'exchangeId') {
      return <Link to={`/ex/${value}`}>{value}</Link>
    }

    return value
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(keys => <th key={keys}>{keys}</th>)}
          </tr>
        </thead>

        <tbody>
          {unwraped(data).map((item, idx) => (
            <tr key={idx}>
              {item.map(([field, value], i) => <td key={i} >{getLink(value, field)}</td>)}

            </tr>))}
        </tbody>
      </table>
      {(data.length > 1) &&
        <button
          className="view-more"
          onClick={onMore}>
          View more
        </button>}
    </div>
  )
}