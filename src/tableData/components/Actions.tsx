import React, {useCallback, useState} from 'react'
import {Button, TextField} from '@material-ui/core'

import {useStores} from '../../stores/MobxProvider'
import api from '../../services/ApiService'

const Actions: React.FC = () => {
    const {refreshTableData} = useStores().tableDataStore

    const [isLoading, setLoading] = useState<boolean>(false)
    const [countValue, setCountValue] = useState<string>('')

    const addUsers = useCallback( async (): Promise<void> => {
        setLoading(true)

        try {
            const formattedValue = countValue ? parseInt(countValue) : undefined

            await api.Users.addRandom(formattedValue)

            await refreshTableData()
        } finally {
            setLoading(false)
        }
    }, [countValue])

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <TextField type='number' value={countValue} onChange={e => setCountValue(e.currentTarget.value)}/>
            <Button color='primary' disabled={isLoading} onClick={addUsers}>Добавить пользователей</Button>
        </div>
        <Button color='primary' disabled={isLoading} onClick={refreshTableData}>Обновить таблицу</Button>
    </div>
}

export default Actions