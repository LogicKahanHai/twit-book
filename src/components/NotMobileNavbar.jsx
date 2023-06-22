import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';

export default function NotMobileNavbar() {
    return (
        <>
            <div
                className="not-mobile not-mobile-navbar d-flex flex-row justify-content-between align-items-center w-100">
                <div className="home-icon-div">
                    <HomeIcon className="home-icon"/>
                </div>
                <div className="d-flex flex-row justify-content-evenly align-items-center navbar-icons">
                    <PeopleIcon className="nav-icon-each"/>
                    <SettingsIcon className="nav-icon-each"/>
                    <NotificationsIcon className="nav-icon-each"/>
                    <QuestionAnswerRoundedIcon className="nav-icon-each"/>
                </div>
            </div>
        </>
    )
}