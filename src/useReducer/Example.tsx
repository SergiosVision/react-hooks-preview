import React from 'react'

import TodosCtxProvider from './TodosCtxProvider'
import Todo from './Todo'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    export enum ActionTypes {
        Add = 'ADD_TODO',
        Toggle = 'TOGGLE_TODO',
        Remove = 'REMOVE_TODO'
    }

    export type Action = {
        type: ActionTypes
        payload: any
    }

    export const todoReducer = (state: ITodo[], action: Action) => {
        switch (action.type) {
            case ActionTypes.Add:
                return [
                    ...state,
                    {
                        id: Date.now(),
                        title: action.payload,
                        completed: false
                    }
                ]
            case ActionTypes.Toggle:
                return state.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
    
                    return todo
                })
            case ActionTypes.Remove:
                return state.filter(todo => todo.id !== action.payload)
            default:
                return state
        }
    }
`

const codeTextTwo = `
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
`

const codeTextThree = `
    import React, {KeyboardEvent, ChangeEvent, useState} from 'react'

    import TodoList from './components/TodoList'
    import {ActionTypes} from './reducers'
    import {useTodo} from './TodosCtxProvider'

    const Todo: React.FC = () => {
        const {dispatch} = useTodo()
        const [todoTitle, setTodoTitle] = useState<string>('')
    
        const addTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
            if (dispatch) {
                if (e.key === 'Enter') {
                    dispatch({
                        type: ActionTypes.Add,
                        payload: todoTitle
                    })
    
                    setTodoTitle('')
                }
            }
        }
    
        const changeInput = (e: ChangeEvent<HTMLInputElement>): void => setTodoTitle(e.currentTarget.value)
    
        return (
            <div className='container'>
                <h1>Todo App</h1>
    
                <div className='input-field'>
                    <input onChange={changeInput} value={todoTitle} onKeyPress={addTodo} type='text'/>
                    <label>Todo name</label>
                </div>
    
                <TodoList/>
            </div>
        )
    }
    
    export default Todo
`

const codeTextFour = `
    const Example: React.FC = () => {
        return (
            <div>
                <TodosCtxProvider>
                    <Todo/>
                </TodosCtxProvider>
            </div>
        )
    }

    export default Example
`

const Example: React.FC = () => {
    return (
        <div>
            <TodosCtxProvider>
                <Todo/>
            </TodosCtxProvider>
            <br/>
            <div>
                <h5>reducers.ts</h5>
                <br/>
                <CodeBlock code={codeText}/>
            </div>
            <br/>
            <div>
                <h5>TodosCtxProvider.tsx</h5>
                <br/>
                <CodeBlock code={codeTextTwo}/>
            </div>
            <br/>
            <div>
                <h5>Todo.tsx</h5>
                <br/>
                <CodeBlock code={codeTextThree}/>
            </div>
            <br/>
            <div>
                <h5>Example.tsx</h5>
                <br/>
                <CodeBlock code={codeTextFour}/>
            </div>
        </div>
    )
}

export default Example