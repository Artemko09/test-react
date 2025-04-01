import React, {useState} from 'react'
import styles from './ColorPicker.module.css'

function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    return(
        <div className = {styles.container}>
            <div className={styles.display} style={{ backgroundColor: color }}>Selected color: {color}</div>
            <p>Pick the color</p>
            <input className = {styles.pickColor} type='color' value={color} onChange={changeColor}></input>
        </div>
    )
}

export default ColorPicker