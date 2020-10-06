import {ITodo} from './components/TodoItem'

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