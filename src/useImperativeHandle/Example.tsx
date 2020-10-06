import React, {useEffect, useRef} from 'react'

import Input, {InputHandles} from './Input'
import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
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
`

const codeTextTwo = `
    const Example: React.FC = () => {
        const inputRef = useRef<InputHandles | null>(null)
    
        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.focus()
    
                setRandomValue()
            }
        }, [])
    
        const setRandomValue = () => {
            if (inputRef.current) {
                inputRef.current.setRandomValue()
            }
        }
    
        return (
            <div>
                <Input style={{marginBottom: '20px'}} ref={inputRef}/>
                <Button style={{marginRight: '16px'}} onClick={setRandomValue}>Set random input value</Button>
            </div>
        )
    }
`

const Example: React.FC = () => {
    const inputRef = useRef<InputHandles | null>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()

            setRandomValue()
        }
    }, [])

    const setRandomValue = () => {
        if (inputRef.current) {
            inputRef.current.setRandomValue()
        }
    }

    return (
        <div>
            <Input style={{marginBottom: '20px'}} ref={inputRef}/>
            <Button style={{marginRight: '16px'}} onClick={setRandomValue}>Set random input value</Button>
            <br/>
            <div>
                <h5>Input.tsx</h5>
                <CodeBlock code={codeText}/>
            </div>
            <br/>
            <div>
                <h5>Example.tsx</h5>
                <CodeBlock code={codeTextTwo}/>
            </div>
        </div>
    )
}

export default Example