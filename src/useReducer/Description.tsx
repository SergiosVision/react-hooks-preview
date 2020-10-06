import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    useReducer((state: stateType, action: actionType) => {
        ...Logic
    }, ...InitialState, ...initializer)
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    Альтернатива для useState.
                    Принимает редюсер типа (state, action) =&gt; newState и возвращает текущее состояние в паре с методом dispatch.
                    (Очень похож на Redux)
                </p>
                <br/>
                <p>
                    Хук useReducer обычно предпочтительнее useState, когда у нас сложная логика состояния,
                    которая включает в себя несколько значений, или когда следующее состояние зависит от предыдущего.
                    useReducer также позволяет оптимизировать производительность компонентов, которые запускают глубокие обновления,
                    поскольку можно передавать dispatch вместо колбэков.
                </p>
            </h5>
            <br/>
            <h5>
                <p>
                    Принимат 3 аргумента:
                    <br/>
                    <ol>
                        <li>
                            Редюсер у которго есть 2 аргумента state и action.
                            Второй аргумент может быть любым, у него нет строгой структуры как в Redux.
                        </li>
                        <li>
                            Это Initial state
                        </li>
                        <li>
                            "Ленивая инициализация" - Позволяет извлечь логику для расчета начального состояния за пределы редюсера.
                            Заменяет значение которое было передано в Initial state.
                        </li>
                    </ol>
                </p>
            </h5>
            <CodeBlock code={codeText}/>
        </DescriptionWrapper>
    )
}

export default Description