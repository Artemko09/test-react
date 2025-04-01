import React, {useState} from 'react'

function OnChange(){

    const [name, setName] = useState('Guest');
    const [num, setNum] = useState(1);
    const [typeshit, setTypeShit] = useState('');
    const [game, setGame] = useState();
    const [choice, setChoice] = useState('Yes');

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeNum = (e) => {
        setNum(e.target.value)
    }

    const changeComment = (e) => {
        setTypeShit(e.target.value)
    }

    const selectGame = (e) => {
        setGame(e.target.value)
    }

    const doTheChoice = (e) => {
        setChoice(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={changeName}></input>
            <p>Name: {name}</p>

            <input value={num} onChange={changeNum} type='number'></input>
            <p>Number: {num}</p>

            <textarea value = {typeshit} onChange = {changeComment} placeholder = 'Type Shit'></textarea>
            <p>Comment: {typeshit} </p>

            <select value={game} onChange={selectGame}>
                <option value = ''>Select the game</option>
                <option value = 'Red Dead Redemption 2'>Red Dead Redemption 2</option>
                <option value = 'The Last of Us 2'>The Last of Us 2</option>
                <option value = 'Cyberpunk 2077'>Cyberpunk 2077</option>
            </select>
            <p>Game: {game}</p>


            <label>
                <input type='radio' value='Yes' checked = {choice === 'Yes'} onChange = {doTheChoice}></input>
                Yes
            </label>
            <br></br>
            <label>
            <input type='radio' value='No' checked = {choice === 'No'} onChange = {doTheChoice}></input>
                No
            </label>
            <p>Choice: {choice}</p>
        </div>
    )

}

export default OnChange