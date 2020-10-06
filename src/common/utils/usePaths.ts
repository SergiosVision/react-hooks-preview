import {useRouteMatch} from 'react-router-dom'

import Routes from '../../routes'

const usePaths = () => {
    const {path} = useRouteMatch()

    return {
        description: path,
        example: `${path}${Routes.example}`
    }
}

export default usePaths