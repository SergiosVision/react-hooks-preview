import React from 'react'
import {CodeBlock as LibCodeBlock, monokai} from 'react-code-blocks'

interface Props {
    code: any
    lang?: string
    showLineNumbers?: boolean
}

const CodeBlock: React.FC<Props> = ({code, lang = 'tsx', showLineNumbers = false}) => {
    return (
        <LibCodeBlock text={code}
                      language={lang}
                      showLineNumbers={showLineNumbers}
                      theme={monokai}/>
    )
}

export default CodeBlock