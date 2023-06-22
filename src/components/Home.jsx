import HomeInputBox from "./HomeInputBox.jsx";
import HomePostBox from "./HomePostBox.jsx";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Home() {
    return (
        <div className="d-flex flex-column home">
            <HomeInputBox/>
            <HomePostBox/>
            <div className="home-box home-dummy-box d-flex flex-column p-2">
                <div className="d-flex flex-row justify-content-end ms-3 me-3 mb-auto">
                    <div className="d-flex flex-row">
                        <BookmarkIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}