import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import HomeIcon from "@mui/icons-material/Home";
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import PersonIcon from '@mui/icons-material/Person';

export default function MobileNavbar({handleShow}) {
    return (
        <>
            <div className="mobile">
                <Navbar className="mobile mobile-navbar ">
                    <Navbar.Brand>
                        <Button className="mobile mobile-sidebar navbar-toggler-icon p-3 sidebar-toggler"
                                variant="light"
                                onClick={handleShow}>
                        </Button>
                        <HomeIcon className="mobile mobile-home-icon"/>
                    </Navbar.Brand>
                    <Navbar.Text className="mobile mobile-navbar-text d-flex flex-row-reverse">
                        <div className="d-flex flex-row">
                            <TextsmsRoundedIcon className="mobile mobile-message-icon"/>
                            <span className="mobile mobile-message-text">Random Chats</span>
                        </div>
                        <div className="d-flex flex-row">
                            <PersonIcon className="mobile mobile-person-icon"/>
                            <span className="mobile mobile-message-text">Virtual Friends</span>
                        </div>
                    </Navbar.Text>
                </Navbar>
            </div>
        </>

    )
}