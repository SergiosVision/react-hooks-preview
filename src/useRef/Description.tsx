import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeText = `   
    const ref = useRef<HTMLDivElement | null>(null)
    
    console.log(ref.current)
    // Return null
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue).
                    Возвращённый объект будет сохраняться в течение всего времени жизни компонента.
                </p>
                <br/>
                <p>
                    По сути, useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.
                </p>
            </h5>
            <br/>
            <CodeBlock code={codeText}/>
        </DescriptionWrapper>
    )
}

export default Description