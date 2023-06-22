import BottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import styled from "@emotion/styled";

export default function FixedBottomNavigation() {

    const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
    width: 100%;
    color: #fff;
    &.Mui-selected {
        color: #fff;
        background-color: #00333e;
    }
    `
    );

    return (
        <BottomNavigation
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                backgroundColor: '#00333e',
            }}
        >
            <BottomNavigationAction className="bottom-nav-action" label="Recents" icon={<PeopleIcon/>}/>
            <BottomNavigationAction className="bottom-nav-action" label="Favorites" icon={<SettingsIcon/>}/>
            <BottomNavigationAction className="bottom-nav-action" label="Nearby" icon={<NotificationsIcon/>}/>
            <BottomNavigationAction className="bottom-nav-action" label="Folder"
                                    icon={<QuestionAnswerRoundedIcon/>}/>

        </BottomNavigation>
    )
}