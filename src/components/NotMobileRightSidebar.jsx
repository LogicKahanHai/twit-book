import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import PersonIcon from '@mui/icons-material/Person';

export default function NotMobileRightSidebar() {
    return (
        <>
            <div className="d-flex flex-column sidebar-right">
                <div className="w-100 d-flex flex-row justify-content-end align-items-center mb-4 mt-3">
                    <img src="https://placehold.co/50/png" alt="profile" className="rounded-circle"/>
                </div>
                <div className="wrapper w-100 d-flex flex-column justify-content-center align-items-start mt-1">
                    <div className="special">
                        <h4 className="text-white">SPECIAL FEATURES</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly feature">
                        <ChatBubbleOutlineRoundedIcon className="icon"/>
                        <span className="text-white">Random Chats</span>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly feature">
                        <PersonIcon className="icon"/>
                        <span className="text-white">Virtual Friend</span>
                    </div>
                </div>
            </div>
        </>
    )
}