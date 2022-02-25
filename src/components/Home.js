import Cards from "./Cards";
import Traffic from "./Traffic";
import Goals from "./Goals";

function Home() {
  return (
    <div className="Home-content">
      <Cards />
      <div className="sub-container">
        <div className="trafic">
          <Traffic />
        </div>
        <div className="goals">
          <Goals />
        </div>
      </div>
    </div>
  );
}

export default Home;
