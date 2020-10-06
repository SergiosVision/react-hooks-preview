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