import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'
import Button from '../common/Button/Button'

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>
                    Идентичен useEffect, но этот хук запускается синхронно после всех изменений DOM.
                    Обновления внутри useLayoutEffect, будут полностью применены синхронно перед тем,
                    как браузер получит шанс осуществить отрисовку.
                </p>
            </h5>
            <div style={{display: 'flex'}}>
                <a target='_blank' rel='noopener noreferrer' style={{marginRight: '16px'}} href='https://www.youtube.com/watch?v=M5_RlEn0XKw&feature=youtu.be'>
                    <Button>UseEffect with heavy computation</Button>
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=irUvYd39k4c&feature=youtu.be'>
                    <Button>UseLayoutEffect with heavy computation</Button>
                </a>
            </div>
        </DescriptionWrapper>
    )
}

export default Description