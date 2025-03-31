import React, {useState} from 'react'

function Counter(){

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState();

    const updateName = () => {
        setName('Lucy')
    }

    const incrementeAge = () => {
        setAge(age + 1);
    }

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementeAge}>Increment Age</button>
            
            <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={updateIsEmployed}>Toggle Status</button>
        </div>
    )
}

export default Counter