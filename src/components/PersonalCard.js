import React, {useState} from 'react'

const PersonalCard = (props)=>{
    const[inAge, setinAge]= useState(props.age)
    return(
        <div>
            <h2>{props.firstName}, {props.lastName}</h2>
            <p>Age:{inAge}</p>
            <p>Hair Color: {props.color}</p>
            <button onClick= { (event) => setinAge(inAge+1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default PersonalCard;
