import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function DogDetails({dogList}){

    const params = useParams();

    const selectedDog = dogList.filter(dog => {
        return params.name === dog.name;
    })

    console.log("params", params)
    console.log("Selected dog", selectedDog)
}

export default DogDetails;