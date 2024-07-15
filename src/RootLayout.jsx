import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout() {
    
    return(
        <div className="flex grow lg:flex-row flex-col lg:pb-0 pb-16">
            <Sidebar/>
            <div className="flex flex-col grow bg-[#f8f8f8]">

                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    )
}