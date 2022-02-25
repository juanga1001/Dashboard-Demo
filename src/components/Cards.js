import InboxIcon from '@mui/icons-material/Inbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GroupIcon from '@mui/icons-material/Group';

function Cards() {
    return ( 
        <div className="Cards">
            <div className="Card Card-1">
                <InboxIcon className='Card-icon'/>
                <h4>123K</h4>
                <p>Messages</p>
            </div>
            <div className="Card Card-2">
                <LocationOnIcon className='Card-icon'/>
                <h4>23K</h4>
                <p>Checki-ns</p>
            </div>
            <div className="Card Card-3">
                <InsertDriveFileIcon className='Card-icon'/>
                <h4>23K</h4>
                <p>Files</p>
            </div>
            <div className="Card Card-4">
                <GroupIcon className='Card-icon'/>
                <h4>40K</h4>
                <p>Users</p>
            </div>

        </div>
     );
}

export default Cards;