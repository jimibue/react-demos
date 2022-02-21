import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const Todos = (props) => {
  // see if todos was passed via props, if so use those if not use []
  const [todos, setTodos] = useState(props.todos || []);

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li>
          <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
            {todo.todo}
          </p>
        </li>
      );
    });
  };
  return (
    <DemoContainer header='C(R)UD: READ' code={TodosCode}>
      <h1>Todos:</h1>
      <ul>{renderTodos()}</ul>
    </DemoContainer>
  );
};

export default Todos;

const TodosCode = `//

import React, { useState } from "react";
import DemoContainer from "../../DemoContainer";

const Todos = (props) => {
  // see if todos was passed via props, if so use those if not use []
  const [todos, setTodos] = useState(props.todos || []);

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li>
          <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
            {todo.todo}
          </p>
        </li>
      );
    });
  };
  return (
    <DemoContainer header='CRUD: READ' code={}>
      <h1>Todos:</h1>
      <ul>{renderTodos()}</ul>
    </DemoContainer>
  );
};

// ... rendering this component would look like this in another file
...
<Todos todos={[{todo:'eat',complete:false},{todo:'study', complete:true}]}/>
...
//
`
