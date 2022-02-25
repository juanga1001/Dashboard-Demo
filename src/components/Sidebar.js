import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import CottageIcon from "@mui/icons-material/Cottage";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";

function Sidebar(props) {
  
  return (
    <div className="Sidebar column">
      <div className="Sidebar-logo">
        <AllInclusiveIcon />
      </div>
      <div className="Sidebar-menu">
        <ul>
          <li className={props.selected === 'Home' ? 'selected' : null} onClick={() => props.click('Home')}>
            <span><CottageIcon /></span>
            <br></br>
            <span className="title-nav">Home</span>
          </li>
          <li className={props.selected === 'Search' ? 'selected' : null} onClick={() => props.click('Search')}>
            <span><ZoomOutIcon /></span>
            <br></br>
            <span className="title-nav">Search</span>
          </li>
          <li className={props.selected === 'Team' ? 'selected' : null} onClick={() => props.click('Team')}>
            <span><PeopleAltIcon /></span>
            <br></br>
            <span className="title-nav">Team</span>
          </li>
          <li className={props.selected === 'Traffic' ? 'selected' : null} onClick={() => props.click('Traffic')}>
            <span><BarChartIcon /></span>
            <br></br>
            <span className="title-nav">Reports</span>
          </li>
          <li className={props.selected === 'Form' ? 'selected' : null} onClick={() => props.click('Form')}>
            <span><EventIcon /></span>
            <br></br>
            <span className="title-nav">Form</span>
          </li>
          <li className={props.selected === 'Options' ? 'selected' : null} onClick={() => props.click('Options')}>
            <span><BrightnessHighIcon /></span>
            <br></br>
            <span className="title-nav">Options</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
