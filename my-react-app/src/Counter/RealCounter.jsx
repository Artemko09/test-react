import styles from './Counter.module.css'
import React, {useState} from 'react'

function RealCounter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className = {styles.container}>
           <p >{count}</p> 
           <button className = {styles.plusButton} onClick={increment}>Plus</button>
           <button className = {styles.minusButton} onClick={decrement}>Minus</button>
           <button className = {styles.resetButton} onClick={reset}>Reset</button>
        </div>
    )
}

export default RealCounter