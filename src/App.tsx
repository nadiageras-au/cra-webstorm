import React from 'react';
import './App.css';
import {Button} from "./components/Button/Button.styled";


function App() {
    // const myFirstSubscriber=()=>{
    //     console.log("Hello, this is Masha")
    // }
    //
    // const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("My name is Olga")
    // }
    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (number: number) => {
    //     console.log("I am foo2 and have got number: " + number)
    // }

    const ButtonFoo = (name:string,age?:number, address?:string) => {
        console.log("I am " + name, age, address)
    }

    return (
        <>
            {/*<StyledBtn onClick={mySecondSubscriber}>*/}
            {/*    MyYouTubeChannel - 2*/}
            {/*</StyledBtn> */}

            <Button title={"MyYouTubeChannel - 1"} onClick={()=>ButtonFoo("Vasya", 39, "live in Moscow")}/>
            <Button title={"MyYouTubeChannel - 2"} onClick={()=>ButtonFoo("Andrew", 22)}/>

            {/*<Button title={"1"}/>*/}
            {/*<button onClick={() => {*/}
            {/*    foo2(100500)*/}
            {/*}}>2*/}
            {/*</button>*/}
        </>

    )
}

export default App;

