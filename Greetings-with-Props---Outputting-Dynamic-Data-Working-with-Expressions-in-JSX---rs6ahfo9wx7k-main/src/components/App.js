import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  let name = "Nishant Shokeen";
  return (
    <Welcome name={name} />
  )
}


export default App;
