import axios from "axios";
import { useState } from "react";


/**
 * 
 */
function DogList() {

  const [dogList, setDogList] = useState([]);

  async function listLoader() {
      const response = await axios.get("http://localhost:5001/dogs");

      setDogList([...response.data]);
  }

  listLoader();

  console.log("dogList: ", dogList);


  return (
    <div className="DogList">
      {dogList.map(dog => 
        <div>
          {dog.name}, {dog.facts[0]}
        </div>
        )}

    </div>
  );
}

export default DogList;