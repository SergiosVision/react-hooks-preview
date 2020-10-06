import React, {useCallback, useRef} from 'react'

import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    const Example: React.FC = () => {
        const inputEl = useRef<HTMLInputElement | null>(null)
    
        const buttonClick = useCallback(() => {
            const input = inputEl.current
    
            if (input) {
                input.focus()
            }
        }, [inputEl.current])
    
        return (
            <div>
                <input placeholder='Type something' ref={inputEl} type='text'/>
                <Button style={{marginTop: '30px'}} onClick={buttonClick}>Set focus on a input field</Button>
            </div>
        )
    }
`

const Example: React.FC = () => {
    const inputEl = useRef<HTMLInputElement | null>(null)

    const buttonClick = useCallback(() => {
        const input = inputEl.current

        if (input) {
            input.focus()
        }
    }, [inputEl.current])

    return (
        <div>
            <div>
                <input placeholder='Type something' ref={inputEl} type='text'/>
                <Button style={{marginTop: '30px'}} onClick={buttonClick}>Set focus on a input field</Button>
            </div>
            <br/>
            <CodeBlock code={codeText}/>
        </div>
    )
}

export default Example