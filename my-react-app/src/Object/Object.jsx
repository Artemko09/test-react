import React, {useState} from "react";

function Object(){

    const [car, setCar] = useState({year: 2025, 
                                    make: 'McLaren', 
                                    model: 'P1' })
                            
    function handleYearChange(e){
        setCar(c => ({...c, year: e.target.value}))
    }
    function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}))
    }
    function handleModelChange(e){
        setCar(c => ({...c, model: e.target.value}))
    }

    return(<div>
        <p>Your favotite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
        <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
    </div>)
}

export default Object