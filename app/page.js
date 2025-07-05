"use client";
import { useEffect, useRef, useState } from "react";
import Todo from "./components/TodoCard";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const todoStorage = JSON.parse(localStorage.getItem("todos"));
    console.log("after parsing: ", JSON.parse(localStorage.getItem("todos")));
    setTodos(todoStorage);
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    if (!title || title === "") {
      alert("INVALID INPUT: Please enter a task");
      return;
    }
    let todosAdded = {
      title: title,
      description: description,
    };
    setTodos((prev) => [...prev, todosAdded]);
    localStorage.setItem("todos", JSON.stringify([...todos, todosAdded]));
    setTitle("");
    setDescription("");
  };

  const deleteTodo = (title) => {
    setTodos((prev) => {
      let newTodos = prev.filter((item, index) => {
        return item.title !== title;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  return (
    <>
      <p className="text-3xl font-bold">TODO APP</p>
      {/* add todo */}
      <div className="p-4">
        <label>Add Todo Title: </label>
        <br />
        <input
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Add Todo Desription: </label>
        <br />
        <input
          ref={descriptionRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button onClick={(e) => addTodo(e)}>Add Todo</button>
      </div>
      {/* showe todo */}
      <div className="grid grid-cols-4 gap-4">
        {todos &&
          todos.length > 0 &&
          todos.map((item, index) => {
            return (
              <Todo
                key={index}
                title={item.title}
                description={item.description}
                added={item.date}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </div>
    </>
  );
}
