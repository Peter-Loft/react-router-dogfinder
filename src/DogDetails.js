import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



function DogDetails({originalDogList}){

    console.log("originalDogList",originalDogList);

    const params = useParams();

    // Need a guardian if related to our originalDogList
    const dog = originalDogList.filter(dog => {
        return params.name === dog.name;
    })[0];

    console.log("selected dog", dog)

    // if(Object.keys(originalDogList).length === 0){
    //     setDog({...selectedDogs[0]});
    // }
    console.log("dog: ", dog);

    return (
        <div className="DogDetails">
            <h1>
            {dog?.name}
            </h1>
            <img src={"http://localhost:3000/"+dog?.src + ".jpg"} alt={dog?.name}></img>
            <h3>Age: {dog?.age}</h3>
            <ul>
                {dog?.facts?.map(fact => {
                    return (<li>{fact}</li>);
                })}
            </ul>
        </div>
    );
}

export default DogDetails;