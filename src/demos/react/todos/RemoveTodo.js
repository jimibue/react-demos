import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const RemoveTodo = (props) => {
  // see if todos was passed via props, if so use those if not use []
  const [todos, setTodos] = useState(props.todos || []);

  const [todoName, setTodoName] = useState(null);

  const handleSubmit = (e) => {
    // prevent page from reloading
    e.preventDefault();
    // generate a random num 0 - 99999 to act as a id
    let id = Math.floor(Math.random() * 100000);
    let newTodo = { id: id, todo: todoName, complete: false };
    // create a clone of todos and add new todo to it
    setTodos([...todos, newTodo]);
    // clear value in form
    setTodoName("");
  };

  // we do not want to mutate todos, so we make a clone
  // of it and update that
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
    // keep the todo is long as the todo id doesn't equal the id
    // that was click(the one we want to remove)
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
            {/*  ADD HANDLER HERE, give id of each todo to remove */}
          </p>
          <button onClick={() => removeTodo(todo.id)}>remove</button>
        </li>
      );
    });
  };
  return (
    <DemoContainer header="CRU(D) Delete" code={RemoveTodoCode}>
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

export default RemoveTodo;

const RemoveTodoCode = `//

...
const removeTodo = (id)=>{
    // keep the todo is long as the todo id doesn't equal the id
    // that was click(the one we want to remove)
    let filterTodos = todos.filter(t=> t.id !==id)
    setTodos(filterTodos)
}
...

const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li onClick={() => updateTodo(todo)}>
          <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
            {todo.todo}
          </p>
          {/*  ADD HANDLER HERE, give id of each todo to remove */}
          <span onClick={()=>removeTodo(todo.id)}>X</span>
        </li>
      );
    });
  };
`;
