import React, {useCallback, useState} from 'react'

import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    const functions = new Set()

    const Example: React.FC = () => {
        const [delta, setDelta] = useState<number>(1)
    
        const [count, setCount] = useState<number>(0)
    
        const incrementDelta = useCallback(() => setDelta(delta => delta + 1), [])
    
        const increment = useCallback(() => setCount(count => count + delta), [delta])
    
        functions.add(incrementDelta)
    
        functions.add(increment)
    
        return (
            <div>
                <div>Delta is {delta}</div>
                <div>Counter is {count}</div>
                <br/>
                <div>
                    <Button style={{marginRight: '16px'}} onClick={incrementDelta}>Increment Delta</Button>
                    <Button onClick={increment}>Increment Counter</Button>
                </div>
                <br/>
                <div>Newly created functions: {functions.size - 2}</div>
                <br/>
            </div>
        )
    }
`

const functions = new Set()

const Example: React.FC = () => {
    const [delta, setDelta] = useState<number>(1)

    const [count, setCount] = useState<number>(0)

    const incrementDelta = useCallback(() => setDelta(delta => delta + 1), [])

    const increment = useCallback(() => setCount(count => count + delta), [delta])

    functions.add(incrementDelta)

    functions.add(increment)

    return (
        <div>
            <div>Delta is {delta}</div>
            <div>Counter is {count}</div>
            <br/>
            <div>
                <Button style={{marginRight: '16px'}} onClick={incrementDelta}>Increment Delta</Button>
                <Button onClick={increment}>Increment Counter</Button>
            </div>
            <br/>
            <div>Newly created functions: {functions.size - 2}</div>
            <br/>
            <CodeBlock code={codeText}/>
        </div>
    )
}

export default Example