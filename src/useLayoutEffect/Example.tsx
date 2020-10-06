import React, {ChangeEvent, FC, useEffect, useLayoutEffect, useRef, useState} from 'react'

import CardLayout from '../common/Card/Card'

const initialTextValue: string = '10'

interface CardProps {
    title: string
    text: () => string
}

const Card: FC<CardProps> = ({text, title}) => {
    return (
        <CardLayout>
            <span className='card-title'>{title}</span>
            <pre>{text()}</pre>
        </CardLayout>
    )
}

const rectToJson = (rect: DOMRect | null) => (): string => JSON.stringify(rect, null, 2)

const Example: React.FC = () => {
    const [textValue, setTextValue] = useState<string>(initialTextValue)
    const [rect1, setRect1] = useState<DOMRect | null>(null)
    const [rect2, setRect2] = useState<DOMRect | null>(null)

    const divRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        console.log('UseEffect was triggered.')

        if (divRef.current) {
            setRect1(divRef.current.getBoundingClientRect())
        }
    }, [textValue])

    useLayoutEffect(() => {
        console.log('UseLayoutEffect was triggered.')

        if (divRef.current) {
            setRect2(divRef.current.getBoundingClientRect())
        }
    }, [textValue])

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => setTextValue(e.currentTarget.value)

    return (
        <div>
            <div style={{display: 'inline-block'}} ref={divRef}>Some text form input field: {textValue}</div>
            <input type='text' value={textValue} onChange={changeInput}/>
            <div className='row'>
                <div className='col s6'>
                    <Card title='UseEffect' text={rectToJson(rect1)}/>
                </div>
                <div className='col s6'>
                    <Card title='UseLayoutEffect' text={rectToJson(rect2)}/>
                </div>
            </div>
        </div>
    )
}

export default Example