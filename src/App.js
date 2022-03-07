import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Router from './Router';
import axios from "axios";


function App() {

  const [dogList, setDogList] = useState([]);

  async function listLoader() {
    const response = await axios.get("http://localhost:5001/dogs");
    setDogList([...response.data]);
  }

  if(dogList.length === 0){
    listLoader();
  }

  console.log("This is the dogList", dogList)


  return (
    <BrowserRouter>
      <Router dogList={dogList}/>
    </BrowserRouter>
  );
}

export default App;
