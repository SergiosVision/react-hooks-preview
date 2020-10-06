import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const updateCodeText = `
    const [dataObject, setDataObject] = useState<object>({...someDataObject})
    
    const someMethod = (): void => {
        setData(prev => ({...prev, ...data}))
    }
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>Возвращает значение с состоянием и функцию для его обновления.</p>
                <br/>
                <p>Во время первоначального рендеринга возвращаемое состояние (state) совпадает со значением, переданным в качестве первого аргумента (initialState).</p>
                <br/>
                <p>Функция setState используется для обновления состояния. Она принимает новое значение состояния и ставит в очередь повторный рендер компонента.</p>
                <br/>
                <p>Во время последующих повторных рендеров первое значение, возвращаемое useState, всегда будет самым последним состоянием после применения обновлений.</p>
            </h5>
            <br/>
            <h5>
                <h4>Функциональные обновления</h4>
                <p>
                    Если новое состояние вычисляется с использованием предыдущего состояния,
                    вы можете передать функцию в setState. Функция получит предыдущее значение и вернёт обновлённое значение.
                </p>
                <br/>
                <CodeBlock code={updateCodeText}/>
                <br/>
                <p>
                    Если функция обновления возвращает абсолютно такой же результат как и текущее состояние,
                    то последующие повторные рендеры будут полностью пропущены.
                </p>
            </h5>
        </DescriptionWrapper>
    )
}

export default Description