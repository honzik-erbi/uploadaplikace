import Upload from "../Upload/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

export default function AppRoutes() {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/upload" element={<Upload/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}