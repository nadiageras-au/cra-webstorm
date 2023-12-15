import React, {useState} from 'react';
import './App.css';
// import {Button} from "./components/Button/Button.styled";
// import {Counting} from "./components/Counting";
import {NewComponent} from "./components/newComponent/NewComponent";

export type filterType = "all" | "ruble" | "dollar";

function App() {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let currentMoney = money;

    const [filter,  setFilter] = useState<filterType>("all")

    if (filter !== 'all') {
        currentMoney = money.filter((el) => el.banknote === filter)
    } else {
        currentMoney = money
    }
    const onClickFilterHandler = (nameButton:filterType) => {
        setFilter(nameButton);
    }
    return (
        <NewComponent money={currentMoney} onClick={(filt:filterType)=>onClickFilterHandler(filt)} />
        )
}

export default App;

