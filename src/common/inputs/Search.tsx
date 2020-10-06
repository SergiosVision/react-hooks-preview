import React, {memo, useCallback, useState, ChangeEvent} from 'react'
import {TextField} from '@material-ui/core'
import {debounce} from 'lodash'

interface Props {
    value: string
    label: string
    changeSearch: (value: string) => void
}

const Search: React.FC<Props> = ({value, changeSearch, label}) => {
    const [localValue, setLocalValue] = useState<string>('')

    const onSearch = useCallback(debounce(async (value: string): Promise<void> => {
        await changeSearch(value)
    }, 300), [])

    const changeField = (e: ChangeEvent<HTMLInputElement>): void => {
        setLocalValue(e.currentTarget.value)

        onSearch(e.currentTarget.value)
    }


    return (
        <div>
            <TextField label={label} value={localValue} onChange={changeField}/>
        </div>
    )
}

export default memo(Search)