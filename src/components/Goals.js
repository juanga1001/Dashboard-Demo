

function Goals() {
    return ( 
        <div className="Goals-module">
            <h4>Quarter Goals</h4>
            <div className="progress-container">
                <h4>85% <span>(2125/2500)</span></h4>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "15%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-info" role="progressbar" style={{width: "15%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "15%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-dark" role="progressbar" style={{width: "15%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-info" role="progressbar" style={{width: "15%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className="progress-items">
                
            <div className="item-element"><p><span style={{backgroundColor: "#126EFD"}}></span>Watch</p><p>152</p></div>
            <div className="item-element"><p><span style={{backgroundColor: "#1D8754"}}></span>Green Band</p><p>63</p></div>
            <div className="item-element"><p><span style={{backgroundColor: "#2ECAF0"}}></span>Controller</p><p>23</p></div>
            <div className="item-element"><p><span style={{backgroundColor: "#FCC108"}}></span>Yellow Band</p><p>42</p></div>
            <div className="item-element"><p><span style={{backgroundColor: "#212529"}}></span>Phone Case</p><p>134</p></div>
            <div className="item-element"><p><span style={{backgroundColor: "#126EFD"}}></span>T-Shirt</p><p>89</p></div>
            </div>
        </div>
     );
}

export default Goals;