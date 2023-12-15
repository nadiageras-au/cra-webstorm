import React, {useState} from 'react';
import {filterType} from "../../App";


type NewComponentPropsType = {
    money: MoneyType[]
    onClick:(title:filterType)=>void
}
type MoneyType = {
    banknote: string
    nominal: number
    number: string
}


export const NewComponent = (props: NewComponentPropsType) => {


    return (
        <>
            <h1> Hello I am a New Component</h1>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (

                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}  </span>
                            <span>{objFromMoneyArr.nominal}  </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '15px'}}>
                <button onClick={()=>props.onClick("all")}>all</button>
                <button onClick={()=>props.onClick("ruble")}>rubles</button>
                <button onClick={()=>props.onClick("dollar")}>dollars</button>

                {/*<button onClick={() => props.onClick("dollar")}>dollars</button>*/}
            </div>


        </>

    );
};
