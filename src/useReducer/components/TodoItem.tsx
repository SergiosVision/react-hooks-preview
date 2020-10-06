import React from 'react'

import {ActionTypes} from '../reducers'
import {useTodo} from '../TodosCtxProvider'

export interface ITodo {
    title: string
    id: number
    completed: boolean
}

interface Props extends ITodo {}

const cx = require('classnames/bind').bind(require('./styles/todo-item.module.sass'))

const TodoItem: React.FC<Props> = ({title, id, completed}) => {
    const {dispatch} = useTodo()

    const remove = (id: number) => (): void => {
        if (dispatch) {
            dispatch({
                type: ActionTypes.Remove,
                payload: id
            })
        }
    }

    const toggle = (id: number) => (): void => {
        if (dispatch) {
            dispatch({
                type: ActionTypes.Toggle,
                payload: id
            })
        }
    }

    return (
        <li className={cx('wrapper', {completed})}>
            <label>
                <input checked={completed} onChange={toggle(id)} type='checkbox'/>
                <span>{title}</span>
                <i onClick={remove(id)} className='material-icons red-text'>delete</i>
            </label>
        </li>
    )
}

export default TodoItem