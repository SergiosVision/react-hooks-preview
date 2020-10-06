import React from 'react'

import TodoItem from './TodoItem'
import {useTodo} from '../TodosCtxProvider'

const TodoList: React.FC = () => {
    const {todos} = useTodo()

    return (
        <ul>{todos.map((todo, index) => <TodoItem key={index} {...todo}/>)}</ul>
    )
}

export default TodoList