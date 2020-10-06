import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    // Нельзя передавать аргументы, так как это будет ситаться значением а не функцией.

    const someMemoItem = useMemo(() => {
        return ...Some item.
    }, [...dependencies])
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    Возвращает мемоизированное значение.
                    Будет повторно вычислять мемоизированное значение только тогда, когда значение какой-либо из зависимостей изменилось.
                    Поможет избежать дорогостоящих вычислений при каждом рендере.
                </p>
            </h5>
            <br/>
            <CodeBlock code={codeText}/>
        </DescriptionWrapper>
    )
}

export default Description