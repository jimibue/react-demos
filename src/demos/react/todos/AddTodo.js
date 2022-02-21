import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const AddTodo = (props) => {
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
        </li>
      );
    });
  };
  return (
    <DemoContainer header="(C)RUD Create" code={AddTodoCode}>
      <h1>Todos:</h1>
      {/* Here */}
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

export default AddTodo;

const AddTodoCode = `//

....
const [todoName, setTodoName] = useState(null)

const handleSubmit = (e)=>{
    // prevent page from reloading
    e.preventDefault()
    // generate a random num 0 - 99999 to act as a id
    let id = Math.floor(Math.random() * 100000)
    let newTodo = {id:id, todo:todoName, complete:false}
    // create a clone of todos and add new todo to it
    setTodos([...todos, newTodo])
    // clear value in form
    setTodoName('')
}
...

...
return (
    <DemoContainer header='(C)RUD Create' code={AddTodoCode}>
      <h1>Todos:</h1>
      {/* Here */}
      <form onSubmit={handleSubmit}>
         <p>todo name</p>
         <input value={todoName} onChange={(e)=>{setTodoName(e.target.value)}} />
         <br />
         <button type='submit'>add todo</button>
      </form>
    ...
  );

....
`;
