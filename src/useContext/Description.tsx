import React from 'react'

import DescriptionWrapper from '../common/PageStructure/DescriptionWrapper'

const Description: React.FC = () => {
    return (
        <DescriptionWrapper>
            <h5>
                <p>Обычно контекст используется, если необходимо обеспечить доступ данных во многих компонентах на разных уровнях вложенности.</p>
                <br/>
                <p>Является global storage, легким аналогом(Redux, Mobx)</p>
            </h5>
        </DescriptionWrapper>
    )
}

export default Description