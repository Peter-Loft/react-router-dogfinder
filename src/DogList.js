import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


/**
 * 
 */
function DogList({ dogList }) {

  //   const [dogList, setDogList] = useState([]);

  //   async function listLoader() {
  //       const response = await axios.get("http://localhost:5001/dogs");

  //       setDogList([...response.data]);
  //   }

  //   listLoader();

  //   console.log("dogList: ", dogList);


  return (
    <div className="DogList">
      {dogList.map(dog =>
        <div>
          {dog.name}
          <Link to={"/dogs/"+dog.name}>
            <img src={dog.src + ".jpg"} alt={dog.name}></img>
          </Link>
        </div>
      )}

    </div>
  );
}

export default DogList;