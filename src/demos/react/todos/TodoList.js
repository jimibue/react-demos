import React from 'react'
import AddTodo from './AddTodo'
import FullTodos from './FullTodos'
import RemoveTodo from './RemoveTodo'
import TODOCrud from './TODOCrud'
import Todos from './Todos'
import UpdatedTodos from './UpdateTodos'

const TodoList = ()=>{
    return(
        <div style={{flex:'1'}}>
            <h1>TodoList</h1>
            <p>this demostrates how to do CRUD (CREATE READ UPDATE DESTROY) in React</p>
            <TODOCrud/>
            <Todos todos={[{id:1, todo:'eat',complete:false},{id:2,todo:'study', complete:true}]}/>
            <UpdatedTodos todos={[{id:1, todo:'eat',complete:false},{id:2,todo:'study', complete:false}]}/>
            <AddTodo todos={[{id:1, todo:'eat',complete:false},{id:2,todo:'study', complete:false}]}/>
            <RemoveTodo todos={[{id:1, todo:'eat',complete:false},{id:2,todo:'study', complete:false}]}/>
            <FullTodos todos={[{id:1, todo:'eat',complete:false},{id:2,todo:'study', complete:false}]}/>
        </div>
    )
}

export default TodoList
