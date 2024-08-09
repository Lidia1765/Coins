import { useParams } from "react-router-dom";
import './index.css'
export const ExPage = () => {
    let { exId } = useParams();
    return <div className="container">
        <a href="/" className="home">Home</a>
        <div className="info-block">
            <div className="rank">
                <p>1</p>
                <p>RANK</p>
            </div>
            <div>
                <h2>{exId}</h2>
                <p>743 Pairs</p>
            </div>
            <div>
                <p>Volume(24Hr)</p>
                <p>$6,963,593,524</p>
                <button>Website</button>
            </div>
            <div>
                <p>Top Pair</p>
                <p>BTC/USDT</p>
            </div>
        </div>
        <table>
            <thead>
                <th>Pair</th>
                <th>Rate</th>
                <th>Price</th>
                <th>Volume(24hr)</th>
                <th>Volume(%)</th>
                <th>Trades</th>
                <th>Charts</th>
                <th>Status</th>
            </thead>
            <tbody>
                <td></td>
                <td></td>
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