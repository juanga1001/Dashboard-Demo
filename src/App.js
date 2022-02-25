import React from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Traffic from "./components/Traffic";
import Goals from "./components/Goals";
import Home from "./components/Home";
import Form from "./components/Form";
import Search from './components/Search'

function App() {
  const [state, setState] = React.useState("Home");

  function handleClick(selected) {
    setState(selected);
    console.log(state);
  }

  function renderContent() {

    switch(state) {
      case 'Home':
        return <Home/>;
      case 'Search':
          return <Search/>;
      case 'Team':
        return <Cards/>;
      case 'Traffic':
      return <Traffic/>;
      case 'Options':
      return <Goals/>;
      case 'Form':
        return <Form/>;
      default:
        return <Home/>;
    }
  
  }

  return (
    <div>
      <div className="App">
        <Sidebar 
        selected={state}
        click={handleClick} 
        />
        <div className="main-container">
          <Navbar />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
