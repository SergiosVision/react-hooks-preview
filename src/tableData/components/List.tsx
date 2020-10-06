import React, {MouseEvent} from 'react'
import IconButton from '@material-ui/core/IconButton'
import {Delete} from '@material-ui/icons'

import api from '../../services/ApiService'
import {useStores} from '../../stores/MobxProvider'

import Table, {Column, SortDirection} from '../../common/table'
import {IUser} from '../../common/interfaces/user'

import tableDataStore from '../stores/TableDataStore'
import {useTablePage} from '../TablePageContextProvider'

const columns: Column<IUser>[] = [
    {
        title: 'ID',
        field: 'id',
        sortable: true
    },
    {
        title: 'Email',
        field: 'email',
        sortable: true
    },
    {title: 'Имя', field: 'name', sortable: true, defaultSort: SortDirection.ASC},
    {title: 'Аватар', render: ({avatar}) => avatar && <div style={{width: '50px', height: '50px'}}>
            <img style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} src={avatar}/>
        </div>},
    {
        render: ({id}) => {
            const deleteItem = async (e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()

                e.stopPropagation()

                await api.Users.delete(id)

                await tableDataStore.deleteItemsRefresh(1)
            }

            return <IconButton onClick={deleteItem}><Delete/></IconButton>
        }
    }
]

const List: React.FC = () => {
    const {setTableRef} = useStores().tableDataStore
    const {isFetching, fetchUsers} = useTablePage()

    if (!fetchUsers) return null

    return (
        <Table<IUser> columns={columns}
                      pagingOptions={{rowsPerPage: 20, isHideOnSinglePage: false}}
                      isLoading={isFetching}
                      ref={ref => setTableRef(ref)}
                      onRowClick={data => console.log(data)}
                      data={fetchUsers}/>
    )
}

export default List