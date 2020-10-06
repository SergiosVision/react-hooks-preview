import React, {ForwardRefRenderFunction, useImperativeHandle, useRef, forwardRef, HTMLAttributes} from 'react'

export interface InputHandles {
    focus: () => void
    setRandomValue: () => void
}

interface Props extends HTMLAttributes<HTMLInputElement> {}

const Input: ForwardRefRenderFunction<InputHandles, Props> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useImperativeHandle(ref, () => ({
        focus: () => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        },
        setRandomValue: () => {
            if (inputRef.current) {
                inputRef.current.value = Math.random().toString(36).substring(2)
            }
        }
    }), [inputRef])

    return (
        <input {...props} ref={inputRef} type='text'/>
    )
}

export default forwardRef(Input)