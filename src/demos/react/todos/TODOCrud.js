import { useState } from "react/cjs/react.development";
import DemoContainer from "../../DemoContainer";

const TODOCrud = () => {
  const initTodos = [
    { id: 1, todo: "eat", complete: true },
    { id: 2, todo: "sleep", complete: false },
  ];
  const [todos, setTodos] = useState(initTodos);
  const addTodo = () => {
    // hardcoding a todo, we will later do this with a form

    let newTodo = {
      id: Math.random(),
      todo: "get todo from user",
      complete: false,
    };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const renderTodos = () => {
    // hardcoding a todo, we will later do this with a form
    let todosJSX = todos.map((t) => {
      return (
        <div>
          <p>
            {t.todo} is {t.complete ? "done" : "not done"}
          </p>
        </div>
      );
    });
    return todosJSX;
  };
  const updateTodo = (id) => {
    // hardcoding a todo, we will later do this with a form
    let updatedTodos = todos.map((t) =>
      t.id !== id ? t : { ...t, complete: !t.complete }
    );
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    let filterTodos = todos.filter((t) => t.id !== id);
    setTodos(filterTodos);
  };
  return (
    <DemoContainer header="NO REACT: CRUD ON TODOS" code={code}>
      <div>
        <p>Todos:</p>
        <code>{JSON.stringify(todos)}</code>
      </div>
      <div>
        <h1>Rendering todos jsx</h1>
        {renderTodos()}
      </div>
      <hr />
      <div>
        <button onClick={addTodo}>add todo</button>
        <button onClick={() => removeTodo(1)}>remove todo with id 1</button>
        <button onClick={() => updateTodo(2)}>update todo with id 2</button>
      </div>
    </DemoContainer>
  );
};
export default TODOCrud;

let code = `
iimport { useState } from "react/cjs/react.development";
import DemoContainer from "../../DemoContainer";

const TODOCrud = () => {
  const initTodos = [
    { id: 1, todo: "eat", complete: true },
    { id: 2, todo: "sleep", complete: false },
  ];
  const [todos, setTodos] = useState(initTodos);
  const addTodo = () => {
    // hardcoding a todo, we will later do this with a form

    let newTodo = {
      id: Math.random(),
      todo: "get todo from user",
      complete: false,
    };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const renderTodos = () => {
    // hardcoding a todo, we will later do this with a form
    let todosJSX = todos.map((t) => {
      return (
        <div>
          <p>
            {t.todo} is {t.complete ? "done" : "not done"}
          </p>
        </div>
      );
    });
    return todosJSX;
  };
  const updateTodo = (id) => {
    // hardcoding a todo, we will later do this with a form
    let updatedTodos = todos.map((t) =>
      t.id !== id ? t : { ...t, complete: !t.complete }
    );
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    let filterTodos = todos.filter((t) => t.id !== id);
    setTodos(filterTodos);
  };
  return (
    <DemoContainer header="NO REACT: CRUD ON TODOS" code={code}>
      <div>
        <p>Todos:</p>
        <code>{JSON.stringify(todos)}</code>
      </div>
      <div>
        <h1>Rendering todos jsx</h1>
        {renderTodos()}
      </div>
      <hr />
      <div>
        <button onClick={addTodo}>add todo</button>
        <button onClick={() => removeTodo(1)}>remove todo with id 1</button>
        <button onClick={() => updateTodo(2)}>update todo with id 2</button>
      </div>
    </DemoContainer>
  );
};
export default TODOCrud;`