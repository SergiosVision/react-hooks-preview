import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    const someCallbackFn = useCallback(() => {
        ...Some logic.
    }, [...dependencies])
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    Хук useCallback вернёт мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей.
                </p>
                <br/>
                <p>Нужен для предотвращения ненужных рендеров.</p>
            </h5>
            <br/>
            <CodeBlock code={codeText}/>
        </DescriptionWrapper>
    )
}

export default Description