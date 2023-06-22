import usePlaceholder from "react-bootstrap/usePlaceholder";

export default function SidebarHeader({handleHide}) {
    return (
        <>
            <div className="w-100 d-flex justify-content-between align-items-center sidebar-header">
                <img src="https://placehold.co/50/png" alt="profile" className="rounded-circle"/>
                <input
                    id="mobile-sidebar-input"
                    className="sidebar-search placeholder"
                    placeholder="Search..."
                    style={
                        {
                            background: "#001e25",
                            outline: "none",
                            border: "none",
                            borderRadius: "25px",
                            color: "white",
                            width: "65%",
                            padding: "10px 10px 10px 20px",
                        }
                    }/>
                <button className="btn btn-close btn-close-white" onClick={handleHide}></button>

            </div>
        </>
    )
}