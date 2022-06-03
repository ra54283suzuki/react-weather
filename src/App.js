import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const getWeather = (e) => {
    e.preventDefault();
    axios.get("https://api.weatherapi.com/v1/current.json?key=cc2a673266714814849141004220206&q=London&aqi=no").then(res=>console.log(res))
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results />
    </div>
  );
};

export default App;