import axios from "axios";


async function DogList(){
    const dogList = await axios.get("localhost:5000/dogs")
    console.log(dogList)
}

export default DogList;