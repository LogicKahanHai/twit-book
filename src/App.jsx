import MobileSidebar from "./components/MobileSidebar.jsx";
import {useState} from "react";
import FixedBottomNavigation from "./components/FixedBottomNavigation.jsx";
import MobileNavbar from "./components/MobileNavbar.jsx";
import Home from "./components/Home.jsx";
import NotMobileSidebar from "./components/NotMobileSidebar.jsx";
import NotMobileRightSidebar from "./components/NotMobileRightSidebar.jsx";
import NotMobileNavbar from "./components/NotMobileNavbar.jsx";


export default function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [value, setValue] = useState(0);
    const handleShow = () => setShowSidebar(true)
    const handleHide = () => setShowSidebar(false)
    return (
        <>
            <div className="mobile d-flex flex-column">
                <div className="mobile mobile-top-nav flex-shrink-1">
                    <MobileNavbar handleShow={handleShow}/>
                    <div className="mobile mobile-sidebar">
                        <MobileSidebar handleHide={handleHide} show={showSidebar}/>
                    </div>
                </div>
                <div className="mobile flex-grow-1 w-100">
                    <Home/>
                </div>
                <div className="mobile mobile-bottom-nav flex-shrink-1">
                    <FixedBottomNavigation/>
                </div>
            </div>
            <div className="not-mobile">
                <div className="w-100 not-mobile d-flex flex-row">
                    <div className="not-mobile not-mobile-sidebar">
                        <NotMobileSidebar/>
                    </div>
                    <div className="not-mobile not-mobile-home d-flex flex-column">
                        <NotMobileNavbar/>
                        <Home/>
                    </div>
                    <div className="not-mobile not-mobile-right d-flex">
                        <NotMobileRightSidebar/>
                    </div>
                </div>
            </div>
        </>
    )
}