import { useParams } from "react-router-dom";
export const ExPage = () => {
    let { exId } = useParams();
    return <div>{exId}</div>
}