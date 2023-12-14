import React from 'react';

// type NewComponentType = {
//     students:StudentType[]
// }
//
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

export const NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Toyota', model: 'Camry'}
    ]

    return (
        <table>
            <th>
                Manufactorer
            </th>
            <th>
                Model
            </th>
            {
                topCars.map((el) => {
                    return (

                            <tr>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>


                    )
                })
            }
        </table>

        // <ul>
        //     {props.students.map((el)=> {
        //         return(
        //             <li key={el.id}>
        //                 <span>#{el.id} - </span>
        //                 <span>{el.name}, </span>
        //                 <span>{el.age}</span>
        //             </li>
        //         )
        //     })}
        // </ul>
    );
};
