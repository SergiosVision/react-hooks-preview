import React, {useCallback, useMemo, useState} from 'react'

import Button from '../common/Button/Button'

const functions = new Set()

const Example: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    const data = useMemo(() => ({
        isEven: value.length % 2 === 0
    }), [value])

    const increment = useCallback(() => setCount(count => count + 1), [])

    functions.add(data)

    functions.add(increment)

    return (
        <div>
            <div>Data: {data.isEven ? 'Is Even' : 'Is Odd'}</div>
            <div>Count: {count}</div>
            <br/>
            <input type='text' value={value} onChange={e => setValue(e.currentTarget.value)}/>
            <br/>
            <Button onClick={increment}>Increment count</Button>
            <br/>
            <div>Newly created functions: {functions.size - 2}</div>
        </div>
    )
}

export default Example