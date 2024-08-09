import { useParams } from "react-router-dom";
import './index.css'

export const CoinPage = () => {
    let { coinId } = useParams();
    const currentDate = () => {
        let date = new Date();
        let day = String(date.getDate()).padStart(2, '0')
        let month = String(date.getMonth() + 1).padStart(2, '0')
        let year = String(date.getFullYear())
        return (day + '.' + month + '.' + year)
    }

    return <div className="container">
        <a href="/" className="home">Home</a>
        <div className="info-block">
            <div className="rank-coin">
                <p>1</p>
                <p>RANK</p>
            </div>
            <div>
                <h2>{coinId}</h2>
                <p>$66,457.58</p>
            </div>
            <div>
                <p>Market Cap</p>
                <p>$1.31t</p>
                <button>Website</button>
            </div>
            <div>
                <p>Volume (24Hr)</p>
                <p>$9.57b</p>
                <button>Explorer</button>
            </div>
            <div>
                <p>Supply</p>
                <p>19.73m BTC</p>
            </div>
        </div>
        <div className="second-info-block">
            <div>
                <h3>{coinId}</h3>
                <p>{currentDate()}</p>
            </div>
            <div className="properties">
                <div>
                    <p>HIGH</p>
                    <p>LOW</p>
                </div>
                <div>
                    <p>$66,951.94</p>
                    <p>$65,515.16</p>
                </div>
                <div>
                    <p>AVERAGE</p>
                    <p>CHANGE</p>
                </div>
                <div>
                    <p>$66,116.03</p>
                    <p>1.17%</p>
                </div>
            </div>
        </div>
        <table>
            <thead>
                <th>Exchange</th>
                <th>Pair</th>
                <th>Price</th>
                <th>Volume(24hr)</th>
                <th>Volume(%)</th>
                <th>Status</th>
            </thead>
            <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
    </div>
}