import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarBody from "./SidebarBody.jsx";

export default function MobileSidebar({handleHide, show}) {


    return (
        <>
            <Offcanvas
                style={
                    {
                        backgroundColor: "#00333e",
                        width: "100%",
                        height: "100%",
                        color: "white"
                    }
                }
                show={show}
                onHide={handleHide}
                className="sidebar">
                <Offcanvas.Header>
                    <SidebarHeader handleHide={handleHide}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarBody/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}