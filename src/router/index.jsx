import App from '../App'
import { createBrowserRouter, useParams } from "react-router-dom";
import { CoinPage } from '../pages/CoinPage';
import { ExPage } from '../pages/Expage';
import { Table } from '../components/Table';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/test",
        element: <div>Test</div>,
    },
    {
        path: "coin/:coinId",
        element: <CoinPage />,
    },
    {
        path: "ex/:exId",
        element: <ExPage />,
    },
]);