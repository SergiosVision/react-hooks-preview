import React, {ChangeEvent, useCallback, useState} from 'react'

import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

const cx = require('classnames/bind').bind(require('./styles/use-state.module.sass'))

const initialCount: number = 0

const initialText: string = ''

const codeText = `
    const Component: React.FC = () => {
        const [count, setCount] = useState<number>(() => {
            return 0
        })
    
        const [text, setText] = useState<string>('')
    
        const inputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value), [])
    
        const resetInput = useCallback(() => setText(''), [])
    
        return (
            <div>
                <div>
                    <h5>Count: {count}</h5>
    
                    <div className={cx('buttons', 'flex')}>
                        <Button onClick={() => setCount(count => count + 1)}>Add +</Button>
                        <Button onClick={() => setCount(count => count - 1)}>Reduce -</Button>
                        <Button disabled={count === initialCount}
                                onClick={() => setCount(initialCount)}>Reset</Button>
                    </div>
                </div>
                <br/>
                <div>
                    <h5 className={cx('text')}>Text from state: {text}</h5>
                    <div className={cx('flex', 'input-wrapper')}>
                        <input value={text} onChange={inputChange} type='text'/>
                        <Button disabled={text === initialText} onClick={resetInput}>Reset</Button>
                    </div>
                </div>
    
                <br/>
            </div>
        )
    }
`

const Example: React.FC = () => {
    const [count, setCount] = useState<number>(() => {
        return initialCount
    })

    const [text, setText] = useState<string>(initialText)

    const inputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value), [])

    const resetInput = useCallback(() => setText(initialText), [])

    return (
        <div>
            <div>
                <h5>Count: {count}</h5>

                <div className={cx('buttons', 'flex')}>
                    <Button onClick={() => setCount(count => count + 1)}>Add +</Button>
                    <Button onClick={() => setCount(count => count - 1)}>Reduce -</Button>
                    <Button disabled={count === initialCount}
                            onClick={() => setCount(initialCount)}>Reset</Button>
                </div>
            </div>


            <br/>



            <div>
                <h5 className={cx('text')}>Text from state: {text}</h5>
                <div className={cx('flex', 'input-wrapper')}>
                    <input value={text} onChange={inputChange} type='text'/>
                    <Button disabled={text === initialText} onClick={resetInput}>Reset</Button>
                </div>
            </div>

            <br/>

            <CodeBlock code={codeText}/>
        </div>
    )
}

export default Example