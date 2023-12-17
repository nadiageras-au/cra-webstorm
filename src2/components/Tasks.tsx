import React from 'react';

export type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}


export type DataType = {
    title: string;
    tasks: Array<TaskType>;
    students: Array<string>;
};

export type TasksPropsType = {
    data: DataType
};

//export const Tasks = (props: TasksPropsType) => {
export const Tasks = ({data}: TasksPropsType) => {
    const dataItems: Array<JSX.Element> = [];
    const dataStudents: Array<JSX.Element> = []
    // const tasks =  props.data.tasks;
    // const students =  props.data.students;

    const tasks = data.tasks;
    const students = data.students;
    const title = data.title;
    const tasksItems = data.tasks.map((el)=>{
        return(
            <li>
                <span>{el.taskId} - </span>
                <span>{el.title}</span>
                <span>{el.isDone}</span>
            </li>
            )

    })
    const studentsItems = data.students.map((el)=>{
        return <li>{el}</li>
    })

    //2.Destructuring
    //const {tasks, students,title} = props.data


    // for (let i = 0; i < tasks.length; i++) {
    //     const dataItem: JSX.Element = (
    //         <li>
    //             <span>{tasks[i].taskId}</span>
    //             <span>{tasks[i].title}</span>
    //             <span>{tasks[i].isDone}</span>
    //         </li>
    //     );


    //     const student: JSX.Element = (
    //         <li>{students[i]}</li>
    //     );
    //     dataItems.push(dataItem);
    //     dataStudents.push(student);
    // }

    return (
        <div>
            <h1>{title}</h1>
            <ul>{tasksItems}</ul>

            <ul>
                {studentsItems}
            </ul>
        </div>
    );
};
