import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import InboxIcon from '@mui/icons-material/Inbox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return ( 
        <div className="Navbar column">
            <div className="Navbar-search">
                <ZoomOutIcon/>
                <p>Search</p>
            </div>
            <div className="Navbar-menu">
                <InboxIcon/>
                <NotificationsIcon/>
                <AccountCircleIcon className="Navbar-avatar"/>
            </div>


        </div>
     );
}

export default Navbar;