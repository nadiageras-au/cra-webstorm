import React, {useState} from 'react';

export const Counting = () => {

    let [num, setNum] = useState(2)
    const onClickHedler = () => {
        setNum(num = num + 2);
        console.log(num)
    }
    const onClickHedler2 = (num:number) => {
        setNum(num);
        console.log(num)
    }


    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onClickHedler}> number add</button>
            <button onClick={()=>onClickHedler2(0)}> reset</button>
        </div>
    );
};
