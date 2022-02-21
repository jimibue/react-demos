import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const FullTodos = (props) => {
  const [todos, setTodos] = useState(props.todos || []);
  const [todoName, setTodoName] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000);
    let newTodo = { id: id, todo: todoName, complete: false };
    setTodos([...todos, newTodo]);
    setTodoName("");
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, complete: !t.complete };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    let filterTodos = todos.filter((t) => t.id !== id);
    setTodos(filterTodos);
  };

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li>
          <p
            onClick={() => updateTodo(todo)}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
          >
            {todo.todo}
          </p>
          <button onClick={() => removeTodo(todo.id)}>remove</button>
        </li>
      );
    });
  };
  return (
    <DemoContainer header="Full Demo" code={RemoveTodoCode}>
      <h1>Todos:</h1>
      <form onSubmit={handleSubmit}>
        <p>todo name</p>
        <input
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <br />
        <button type="submit">add todo</button>
      </form>

      <ul>{renderTodos()}</ul>
    </DemoContainer>
  );
};

export default FullTodos;

const RemoveTodoCode = `//
import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const FullTodos = (props) => {
  const [todos, setTodos] = useState(props.todos || []);
  const [todoName, setTodoName] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000);
    let newTodo = { id: id, todo: todoName, complete: false };
    setTodos([...todos, newTodo]);
    setTodoName("");
  };

  const updateTodo = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, complete: !t.complete };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    let filterTodos = todos.filter((t) => t.id !== id);
    setTodos(filterTodos);
  };

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li>
          <p
            onClick={() => updateTodo(todo)}
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
          >
            {todo.todo}
          </p>
          <button onClick={() => removeTodo(todo.id)}>remove</button>
        </li>
      );
    });
  };
  return (
    <DemoContainer header="Full Demo" code={RemoveTodoCode}>
      <h1>Todos:</h1>
      <form onSubmit={handleSubmit}>
        <p>todo name</p>
        <input
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <br />
        <button type="submit">add todo</button>
      </form>

      <ul>{renderTodos()}</ul>
    </DemoContainer>
  );
};


`;
