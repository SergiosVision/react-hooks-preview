import React from 'react'

import Card from '../common/Card/Card'

import useWindowSize from './useWindowSize'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    const useWindowSize = (): ReturnValues => {
        const [windowSize, setWindowSize] = useState<ReturnValues>({
            width: 0,
            height: 0
        })
    
        const resize = (): void => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
    
        useEffect(() => {
            window.addEventListener('resize', resize)
    
            resize()
    
            return () => {
                window.removeEventListener('resize', resize)
            }
        }, [])
    
        return windowSize
    }
    
    export default useWindowSize
`

const codeTextTwo = `
    const Example: React.FC = () => {
        const {width, height} = useWindowSize()
    
        return (
            Card classNameContent='center'>
                <span className='card-title'>Window width: {width}px</span>
                <span className='card-title'>Window height: {height}px</span>
            </Card>
        )
    }
`

const Example: React.FC = () => {
    const {width, height} = useWindowSize()

    return (
        <>
            <Card classNameContent='center'>
                <span className='card-title'>Window width: {width}px</span>
                <span className='card-title'>Window height: {height}px</span>
            </Card>
            <br/>
            <div>
                <h5>useWindowSize.ts</h5>
                <br/>
                <CodeBlock code={codeText}/>
            </div>
            <div>
                <h5>Example.tsx</h5>
                <br/>
                <CodeBlock code={codeTextTwo}/>
            </div>
        </>
    )
}

export default Example