import styles from './Button.module.css'

function ButtonNumber2(){

    const handleClick = (event) => {
        event.target.textContent = 'Ouch!'
    }

    return(
        <button onDoubleClick={(event) => handleClick(event)}>Click me</button>
    )
}

export default ButtonNumber2