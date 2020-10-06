import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `
    useImperativeHandle(ref, () => ({
        methodOne: () => {...},
        methodTwo: () => {...},
        value: 1
    }))
    
    // Поддерживает массив зависимостей
    
    useImperativeHandle(ref, () => ....someValues), [...dependencies])
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    Данный хук дает возможность настраивать знаение экземпляра,
                    которое предоставляется родительским компонентом при использовании ref.
                    Хук должен использоваться в паре с forwardRef.
                </p>
            </h5>
            <br/>
            <CodeBlock code={codeText}/>
        </DescriptionWrapper>
    )
}

export default Description