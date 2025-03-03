import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../furnitures/list/List";
import Add from "../../furnitures/add/Add";



export default function Routing(): JSX.Element {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/furniture" />} />
            <Route path="/furniture" element={<List />} />
            <Route path="/add-furniture" element={<Add />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}