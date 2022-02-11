 **ReactJS  -  Introduction** * * * 
 
 React is a JavaScript library for building user interfaces. It is the view layer for web applications. At the heart of all React applications are components. A component is a self-contained module that renders some output. We can write interface elements like a button or an input field as a React component. Components are composable. A component might include one or more other components in its output. Prerequisites There are a few things to be familiar with before playing around in React. Here are a list of those things: * Basic familiarity with HTML and CSS * Basic knowledge of JavaScript and programming. * Basic understanding of the DOM. * Familiarity with ES6 syntax and features. * Node.js installed globally.  Luckily for you we have already covered all of this stuff! Notice that these prerequisites don't mention having to be an expert. If you know a little of each then you will be totally fine to begin learning React. What is React JS? * React is a JavaScript library (one of the most popular ones with over 100,000 GitHub stars). * React is not a framework (unlike Angular which handles a lot more and is far more opinionated). * React is used to build user interfaces (UI) on the frontend. * React is the view layer of an MVC application (**M**odel **V**iew **C**ontroller). * React is an open-source project created by Facebook.  One of the biggest aspects of React is the creation of **components**. Components are like custom, reusable HTML elements, that will allow us to quickly and efficiently build user interfaces.  React also streamlines how data is stored and handled, using **state** and **props**. We will go over all of this in greater detail later in the lecture.  Other Solutions * Angular * Vue * etc Other frameworks often provide more than just a view layer.  They can be opinionated and offer a templated solution.  These can be great things but React is "Just JavaScript".  Using functions to build UI is very empowering and if something can be done with JavaScript it is immediately available in React. Getting Started There are two approaches to starting React.  1\. Building it from the ground up. 2\. Using boilerplate to bootstrap an application. Though it would be beneficial to build a React application from the ground up, it is also very confusing and time consuming. We will be utilizing the second option and using React boilerplate to quickly boot up a React application. We will miss out on how it was built but we can completely focus on key React concepts. 

Create React App

```
$ yarn create react-app counter  
$ cd counter
```

Let's take a look at the files and directories created. At the root level we have: * README.md * package.json * node_modules/ * public/ * src/ Take a look at the public/index.html file: _public/index.html_Our entire React application will be rendered here. Next, let's look at src/index.js _src/index.js_
```javascript
// Importing React allows us to use JSX.   
import React from 'react';  

// This allows us to mount our react application inside the browser  
import ReactDOM from 'react-dom';  

// loads the main CSS file at the highest point in the application  
import './index.css';  

// React Component - mount this component at the top level  
import App from './App';  

// production caching  
import reportWebVitals from './reportWebVitals';  

// ReactDOM.render takes in 2 params.  
 // 1) component to mount  
 // 2) the element in the DOM to mount the component to  
ReactDOM.render(  
 ,  
document.getElementById('root')  
);  

// If you want to start measuring performance in your app, pass a function  
// to log results (for example: reportWebVitals(console.log))  
// or send to an analytics endpoint. Learn more: [https://bit.ly/CRA-vitals](https://bit.ly/CRA-vitals)  
reportWebVitals();
```

Next, let's take a look at our React Component that we are mounting: _src/App.js_

```javascript
import logo from './logo.svg';  
import './App.css';
function App() {  
  return (  
     ....
 
  );  
}
export default App;

```
This is a react functional component meaning it is just a simple React function that returns some JSX.  We can also use classes to define components and will see that later on in the course, but we will primarily use functional components in this course   Inside of the return, there is code that looks a lot like HTML. It is important to know that this is actually JavaScript. Instead of the HTML class attribute, we need to use className because class is a reserved word in JavaScript. The other important thing to note is the **{ logo }** line. The { } are an expression. This means that the JavaScript will be evaluated and the end result will be returned in the view. ### Starting the React application In the package json you will see some scripts: * **start ** -  start the webpack-dev-server * **build**  -  run webpack in production mode to create a production bundle * **test** -  run all the tests * **eject** -  (THIS CAN'T BE UNDONE AND CAREFUL THOUGHT SHOULD BE GIVEN) expose all of the dependencies and configs
$ yarn start
Let's make a change to src/App.js _src/App.js_
....  

# Counter Example

....  

  We will build our counter here  

Notice that the browser already updated. This feature is called hot reloading and it's amazing!  Note this only runs in development mode because we run our app on the webpack-dev-server. ### **State and the useState hook** We have seen useState before but as a reminder the useState hook is a way we keep track and set our dynamic variable in a functional component in React.  In a general sense it looks like this.. We can pass useState an intialState and it will return a getter and a setter for use
 const [state, setstate] = useState(initialState)
_src/App.js_
import {useState} from 'react'  
import './App.css';
function App() {  
  const [count, setCount ] = useState(0)  
  return (  

  

# counter app

### count: {count}

       setCount(count + 1)}>add  
       setCount(count - 1)}>minus  
    


  );  
}
export default App;
A few things to discuss here: * count is how we get the value, and setCount is how we change or update the value. * the onClick we need to wrap in a anonymous function so it is not run when the page reloads, remember in JS using the () on a function will call, but we do need to pass it param,  the workaround is to wrap it a function. * the useState, as well as other hooks, can only be used in functional components and the root level of your function, I.E you cant use hooks in a function in your component What if we want many counters on our page?  We can compose react components from other components:
$ touch src/Counter.js
_src/Counter.js_
import {useState} from 'react'
  
const Counter = () => {  
  const [count, setCount ] = useState(0)  
  return (  
    <>  

# counter app

### count: {count}

       setCount(count + 1)}>add  
       setCount(count - 1)}>minus  

  );  
}
  
export default Counter;
We have moved the logic for our Counter into it's own component. Now we can pull that component into our App and render it.  Our React components need to be wrapped in one main parent JSX tag, if you don't really need any specific tag like a div, section, etc you can use a Fragment which is just a blank tag in React <> ...JSX Now we can use this component multiple times in our app and other React components.  RESUABLITY!!!! _src/App.js_
import Counter from './Counter';
const App = () => {  
  return (  

  );  
}
export default App;
Our app still works exactly the same but we can add many counters.  Each counter has its own state and can operate independently. ### **Props****** Props are properties that can be passed down from parent to child. **Props are read-only.** Let's give each counter a prop of name.  Thinks of props as something similiar to params and arguments in a function.  components can define  many props and when we use a component we don't have to use them all _src/App.js_Now let's use the prop on our Counter.  We first need to add it as a Param to our function.  This doesn't have to be named props, we can name it whatever but we should name it what it is which is props.
import {useState} from 'react'
  
const Counter = (props) => {  
  const [count, setCount ] = useState(0)  
  const {name, color, extra} = props // destructoring, not need but can clean up code  

   return (  
    <>  

# {name ? name : "Counter"}

### style={{color: color ? color: "black"}}>count: {count}

       setCount(count + 1)}>add  
       setCount(count - 1)}>minus  
      {extra && extra}  

  );  
}
  
export default Counter;
Notice the use of the ternary here.  This is a great use case for it because it allows us to see if the particular prop was passed, if it was we can use that value if not we can use a default value,  You will see this all the time in React and other languages.
.....  
const {name, color, extra} = props // destructoring, not need but can clean up code  

.....  

# {name ? name : "Counter"}

 // if name is in props use the name given if not use "Counter"  

...  
{extra && extra} //This is an example if short circuit evualation,  what this is saying if the extra was given use it, if it wasn't do use it.  This is like a shorthand if statement
So that is it for this basic example, hopefully, it was a bit of a review as well as we have seen some of these concepts before.  Let's move on to a more Indepth Example Next.