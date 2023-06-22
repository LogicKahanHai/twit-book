import SidebarBody from "./SidebarBody.jsx";

export default function NotMobileSidebar() {
    return (
        <>
            <div className="d-flex flex-column sidebar">
                <div className="w-100 d-flex justify-content-evenly align-items-center mb-4 mt-3 sidebar-top">
                    <img src="https://placehold.co/50/png" alt="profile" className="rounded-circle"/>
                    <input className="form-control sidebar-search" placeholder="Search..."/>
                </div>
                <SidebarBody/>
            </div>
        </>
    )
}