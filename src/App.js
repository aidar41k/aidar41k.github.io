import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";

function App(props) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <button onClick={() => setShow(!show)}>
        {show ? "Скрыть " : "Показать "}
        картинку
      </button>
      {show && (
        <img src='https://buffer.com/library/content/images/2023/10/free-images.jpg' />
      )}
      {/* <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue) {
            const todo = {
              id: Date.now(),
              text: inputValue,
            };
            setTodos((prev) => [...prev, todo]);
            setInputValue("");
          }
        }}
      >
        Добавить
      </button>
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              handleDelete={handleDelete}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
