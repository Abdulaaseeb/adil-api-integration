import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/homepage";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/*"  element={<MainPage/>}/>
            </Routes>
        </Router>
    )

}