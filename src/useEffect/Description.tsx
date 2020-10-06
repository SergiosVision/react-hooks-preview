import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import CodeBlock from '../common/codeBlock/CodeBlock'

const codeTextOne = `
    useEffect(() => {
        ...Some logic.
    })
`

const codeTextTwo = `
    useEffect(() => {
        ...Some logic
        
        return () => {
            ...Clear logic.
        }
    })
`

const codeTextThird = `
    const SomeTestComponent: React.FC = () => {
        const [isBoolean, setBoolean] = useState<boolean>(false)
    
        // Сработает только один раз.

        useEffect(() => {
            // Работает как componentDidMount
            
            ...Some logic.
        }, [])
        
        // Сработает во время иницализации компонента и изменении зависимости.
        
        useEffect(() => {
            // Будет вызываться при каждом изменении зависимости "isBoolean"
            
            ...Some logic.
        }, [isBoolean])
        
        
        // componentDidMount и componentWillUnmount
        
        useEffect(() => {
            // componentDidMount
            
            ...Some logic.
            return () => {
                // componentWillUnmount
                
                ...Some logic.
            }
        }, [])
    
        return (
            ... 
        )
    }
`

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>Функция, переданная в useEffect, будет запущена после того, как рендер будет зафиксирован на экране.</p>
                <br/>
                <p>По умолчанию эффекты запускаются после каждого завершённого рендеринга, но вы можете решить запускать их только при изменении определённых значений.</p>
            </h5>
            <br/>
            <CodeBlock code={codeTextOne}/>
            <br/>
            <h5>
                <h4>Оичстка</h4>
                <p>
                    Функция очистки запускается до удаления компонента из пользовательского интерфейса, чтобы предотвратить утечки памяти.
                    Кроме того, если компонент рендерится несколько раз (как обычно происходит),
                    предыдущий эффект очищается перед выполнением следующего эффекта.
                </p>
            </h5>
            <br/>
            <CodeBlock code={codeTextTwo}/>
            <br/>
            <h5>
                <h4>Условия срабатывания</h4>
                <p>
                    По умолчанию эффекты запускаются после каждого завершённого рендера.
                    Таким образом, эффект всегда пересоздаётся, если значение какой-то из зависимости изменилось.
                </p>
                <br/>
                <p>
                    Есть возможность запускать эффект с помощью массива зависимостей, который передается вторым агументом после функции вызова.
                    Только после изменения зависимости в массиве, будет запускаться логика описанная в эффекте.
                </p>
            </h5>
            <br/>
            <CodeBlock code={codeTextThird}/>
        </DescriptionWrapper>
    )
}

export default Description