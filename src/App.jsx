import React from "react";
import './App.css';
import ListTodo from './componets/3DZ/1.jsx';
import UserCard from "./componets/5DZ/userCard.jsx";

function App() {
  return (
      <>
        <ListTodo />
        <UserCard name="Мария" age={25} />
        <UserCard name="Иван" age={42} />
        <UserCard name="Кирилл" age={31} />
      </>
  );
}

export default App;
