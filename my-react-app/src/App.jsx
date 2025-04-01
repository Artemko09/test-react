import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student/Student"
import UserGreeting from "./UserGreeting/UserGreeting"
import List from "./List/List"
import ButtonNumber2 from "./Button/ButtonNumber2"
import ProfilePicture from "./ProfPic/ProfilePicture"
import Counter from "./Counter/Counter"
import RealCounter from "./Counter/RealCounter"
import OnChange from "./OnChange/OnChange"
import ColorPicker from "./ColorPicker/ColorPicker"
import Object from "./Object/Object"
import Arrays from "./Arrays/Arrays"
import ArraysOfObjects from "./ArraysOfObjects/ArraysOfObjects"
import ToDoList from "./ToDo-List/ToDoList"
import UseEffect from "./UseEffect/UseEffect"

function App(){

    const fruits = [{id: 1, name: 'apple', calories: 95}, 
        {id: 2, name: 'orange', calories: 45}, 
        {id: 3, name: 'banana', calories: 105}, 
        {id: 4, name: 'coconut', calories: 159}, 
        {id: 5, name: 'pineapple', calories: 37}]
    
   const vegetables = ['lol']

    return(
        <>
            <Card></Card>
            <Button></Button>
            <ButtonNumber2></ButtonNumber2>
            <Student name = 'David' age = {19} isStudent = {true}></Student>
            <Student name = 'Lucyna' age = {21} isStudent = {false}></Student>
            <Student/>
            <br></br>
            <UserGreeting isLoggedIn = {false} username = 'Lucy'></UserGreeting>
            <UserGreeting isLoggedIn = {true}></UserGreeting>

            {fruits.length > 0 ? <List items = {fruits} category = "Fruits"></List> : null}
            {vegetables.length > 0 ? <List ></List>: null}

            <ProfilePicture></ProfilePicture>
            <br></br>
            <Counter></Counter>
            <br></br>
            <RealCounter></RealCounter>
            <br></br>
            <OnChange></OnChange>
            <br></br>
            <ColorPicker></ColorPicker>
            <br></br>
            <Object></Object>
            <br></br>
            <Arrays></Arrays>
            <br></br>
            <ArraysOfObjects></ArraysOfObjects>
            <br></br>
            <ToDoList></ToDoList>
            <br></br>
            <UseEffect></UseEffect>
        </>
    )    
}

export default App