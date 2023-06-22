import ImageIcon from '@mui/icons-material/Image';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function HomeInputBox() {
    return (
        <div className="home-box home-input-box d-flex flex-column p-2">
            <div className="d-flex flex-row">
                <img src="https://placehold.co/20/png" alt="profile" className="rounded-circle"/>
                <textarea className="form-control" placeholder="What's on your mind?"/>
            </div>
            <div className="d-flex flex-row justify-content-between mt-3">
                <div className="d-flex flex-row ms-3">
                    <ImageIcon className="me-4"/>
                    <AddAPhotoIcon/>
                </div>
                <div className="d-flex flex-row me-3">
                    <button className="btn me-2">Draft</button>
                    <button className="btn">Post</button>
                </div>
            </div>
        </div>
    )
}