import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



function DogDetails({originalDogList}){

    console.log("originalDogList",originalDogList);

    const [dog, setDog] = useState({});
    const [dogList, setDogList] = useState(originalDogList);

    const params = useParams();

    const selectedDogs = dogList.filter(dog => {
        return params.name === dog.name;
    });

    setDog({...selectedDogs[0]});
    console.log("dog: ", dog);

    return (
        <div className="DogDetails">
            <h1>
            {dog.name}
            </h1>
            <img src={dog.src + ".jpg"} alt={dog.name}></img>
            <h3>Age: {dog.age}</h3>
            <ul>
                {dog.facts.map(fact => {
                    return (<li>{fact}</li>);
                })}
            </ul>
        </div>
    );
}

export default DogDetails;