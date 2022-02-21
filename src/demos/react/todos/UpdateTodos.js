import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const UpdatedTodos = (props) => {
  // see if todos was passed via props, if so use those if not use []
  const [todos, setTodos] = useState(props.todos || []);

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
    <DemoContainer header="CR(U)D: Update" code={TodosCode}>
      <h1>Todos:</h1>
      <ul>{renderTodos()}</ul>
    </DemoContainer>
  );
};

export default UpdatedTodos;

const TodosCode = `//

....
// we do not want to mutate todos, so we make a clone
// of it and update that
const updateTodo = (todo) => {
   const updatedTodos = todos.map(t=>{
       if(t.id === todo.id){
           return {...todo, complete: !todo.complete}
       } 
       return todo
   })
   setTodos(updatedTodos)
}

const renderTodos = () => {
  return todos.map((todo) => {
    return (
      // add a clickhandler and pass each of them the specific todo
      <li onClick={() => updateTodo(todo)}>
        <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
          {todo.todo}
        </p>
      </li>
    );
  });
};
....
`;
