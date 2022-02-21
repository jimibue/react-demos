import { useState } from "react";
import DemoContainer from "../DemoContainer";

const StateDemo = () => {
  // useState gives back a 'getter' a way to get the state
  // and a 'setter' a way to change the state
  //   const [getState, setState] = useState(initValue)
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "Jon", age: 22 });
  const [todos, setTodos] = useState([{ id:1, name: "eat", complete: false }]);

  const birthday = () => {
    // BAD:don't want to do this as it 'mutates person
    //  person.age = person.age + 1
    // setPerson(person)

    // Instead create a clone of object and update field there
    const clonedAnUpdatedPerson = { ...person, age: person.age + 1 };
    setPerson(clonedAnUpdatedPerson);
  };
  const addTodo = () => {
    let todo = {id:Math.random(), name: "sleep", complete: false };
    // BAD:don't want to do this as it 'mutates person
    //  todos.push(todo)
    // setTodos(todos)

    // Instead create a clone of array and add todos
    const todosClone = [...todos, todo];
    setTodos(todosClone);
  };

  return (
    <DemoContainer header="State Demo" code={StateDemoCode}>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      <hr />
      <h3>Person</h3>
      <p>
        {person.name} is {person.age}
      </p>
      <button onClick={birthday}>have birthday</button>
      <hr />
      <h3>Todos</h3>
      <p>
        {JSON.stringify(todos)}
      </p>
      <button onClick={addTodo}>add todo</button>
    </DemoContainer>
  );
};

export default StateDemo;

const StateDemoCode = `import { useState } from "react";
import DemoContainer from "../DemoContainer";

const StateDemo = () => {
  // useState gives back a 'getter' a way to get the state
  // and a 'setter' a way to change the state
  //   const [getState, setState] = useState(initValue)
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "Jon", age: 22 });
  const [todos, setTodos] = useState([{ id:1, name: "eat", complete: false }]);

  const birthday = () => {
    // BAD:don't want to do this as it 'mutates person
    //  person.age = person.age + 1
    // setPerson(person)

    // Instead create a clone of object and update field there
    const clonedAnUpdatedPerson = { ...person, age: person.age + 1 };
    setPerson(clonedAnUpdatedPerson);
  };
  const addTodo = () => {
    let todo = {id:Math.random(), name: "sleep", complete: false };
    // BAD:don't want to do this as it 'mutates person
    //  todos.push(todo)
    // setTodos(todos)

    // Instead create a clone of array and add todos
    const todosClone = [...todos, todo];
    setTodos(todosClone);
  };

  return (
    <DemoContainer header="State Demo" code={StateDemoCode}>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
      <hr />
      <h3>Person</h3>
      <p>
        {person.name} is {person.age}
      </p>
      <button onClick={birthday}>have birthday</button>
      <hr />
      <h3>Todos</h3>
      <p>
        {JSON.stringify(todos)}
      </p>
      <button onClick={addTodo}>add todo</button>
    </DemoContainer>
  );
};

export default StateDemo;`;
