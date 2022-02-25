import TwitterIcon from '@mui/icons-material/Twitter';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import FacebookIcon from '@mui/icons-material/Facebook';
import SickIcon from '@mui/icons-material/Sick';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

function Traffic() {
  return (
    <div className="Traffic-module">
      <h4>Traffic Distribution</h4>
      <div className="Traffic-cards">
        <div className="Card traffic-card">
          <TwitterIcon style={{color: "#2E5DCD"}} className="Card-icon Traffic-icon" />
          <h4>12.40K</h4>
          <p>Twitter</p>
        </div>
        <div className="Card traffic-card">
          <AlignVerticalBottomIcon style={{color: "#2E5DCD"}} className="Card-icon Traffic-icon" />
          <h4>10.20K</h4>
          <p>Vimeo</p>
        </div>
        <div className="Card traffic-card">
          <FacebookIcon style={{color: "#2E5DCD"}} className="Card-icon Traffic-icon" />
          <h4>5.60K</h4>
          <p>Facebook</p>
        </div>
        <div className="Card traffic-card">
          <SickIcon style={{color: "#382ECD"}} className="Card-icon Traffic-icon" />
          <h4>23.53K</h4>
          <p>Discord</p>
        </div>
        <div className="Card traffic-card">
          <GitHubIcon style={{color: "#6D2ECD"}} className="Card-icon Traffic-icon" />
          <h4>16.70K</h4>
          <p>Github</p>
        </div>
        <div className="Card traffic-card">
          <GoogleIcon style={{color: "#CD2E4D"}} className="Card-icon Traffic-icon" />
          <h4>16.50K</h4>
          <p>Google</p>
        </div>
      </div>
    </div>
  );
}

export default Traffic;
