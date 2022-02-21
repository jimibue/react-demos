import React from 'react'
import Todos from './Todos'

const TodoList = ()=>{
    return(
        <div style={{flex:'1'}}>
            <h1>TodoList</h1>
            <p>this demostrates how to do CRUD (CREATE READ UPDATE DESTROY) in React</p>

            <Todos />
        </div>
    )
}

export default TodoList
