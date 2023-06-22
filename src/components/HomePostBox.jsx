import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function HomePostBox() {
    return (
        <div className="home-box home-post-box d-flex flex-column p-2">
            <div className="d-flex flex-row justify-content-between ms-3 me-3 mb-auto">
                <div className="d-flex flex-row">
                    <img src="https://placehold.co/20/png" alt="profile" className="rounded-circle"/>
                    <span className="ms-2">John Doe</span>
                </div>
                <div className="d-flex flex-row">
                    <BookmarkIcon/>
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-evenly">
                <FavoriteBorderIcon/>
                <VisibilityIcon/>
                <ChatBubbleOutlineRoundedIcon/>
                <ShareRoundedIcon/>
            </div>
        </div>
    )
}