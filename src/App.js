import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Router from './Router';
import axios from "axios";


function App() {

  const [dogList, setDogList] = useState([]);

  async function listLoader() {
    console.log("list loader function");
    const response = await axios.get("http://localhost:5001/dogs");
    setDogList([...response.data]);
  }

  console.log("dogList",dogList)
  if(dogList.length === 0){
    console.log("dog list inside guardian if", dogList)
    listLoader();
  }

  return (
    <BrowserRouter>
      <Router dogList={dogList}/>
    </BrowserRouter>
  );
}

export default App;
