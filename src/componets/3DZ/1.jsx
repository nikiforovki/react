import React from "react";
function ListTodo () {
const  tasks = ['Помыть посуду', 'Сделать домашние задание', 'Прочитать книгу'];
    return (
        <>
        <h1>Список дел</h1>
    <ul>
    {tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
            ))}
        </ul>
        </>
    )

}

export default ListTodo

