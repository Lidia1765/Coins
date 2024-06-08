import { useParams } from "react-router-dom";
export const CoinPage = () => {
    let { coinId } = useParams();
    return <div>{coinId}</div>
}