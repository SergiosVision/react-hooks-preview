import React, {createContext, Dispatch, useContext, useEffect, useReducer} from 'react'

import {Action, todoReducer} from './reducers'
import {ITodo} from './components/TodoItem'

interface ICtx {
    todos: ITodo[]
    dispatch?: Dispatch<Action>
}

const initialValues: ICtx = {
    todos: []
}

const TodosProvider = createContext<ICtx>(initialValues)

export const useTodo = () => useContext(TodosProvider)

const TodosCtxProvider: React.FC = ({children}) => {
    const localStorageTodos = localStorage.getItem('todos')

    const [todos, dispatch] = useReducer(todoReducer, localStorageTodos ? JSON.parse(localStorageTodos) : [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodosProvider.Provider value={{todos, dispatch}}>
            {children}
        </TodosProvider.Provider>
    )
}

export default TodosCtxProvider