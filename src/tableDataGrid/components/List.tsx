import React, {MouseEvent} from 'react'
import {IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {observer} from 'mobx-react'

import api from '../../services/ApiService'
import {useStores} from '../../stores/MobxProvider'

import TableGrid, {SortDirection} from '../../common/tableGrid'
import {Column} from '../../common/tableGrid/interfaces'
import {IUser} from '../../common/interfaces/user'

import tableGridDataStore from '../stores/TableGridDataStore'

const columns: Column<IUser>[] = [
    {field: 'id', title: 'ID', sortable: true},
    {field: 'email', title: 'Email', sortable: true},
    {field: 'name', title: 'Имя', sortable: true, defaultSort: SortDirection.ASC},
    {
        field: 'avatar',
        title: 'Аватар',
        render: ({avatar}) => (
            <div style={{width: '60px', height: '60px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} src={avatar}/>
            </div>
        ),
        width: '92px'
    },
    {
        render: ({id}) => {
            const deleteItem = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
                e.preventDefault()

                e.stopPropagation()

                await api.Users.delete(id)

                await tableGridDataStore.deleteItemsRefresh(1)
            }

            return <IconButton onClick={deleteItem}><Delete/></IconButton>
        },
        align: 'right',
        width: '78.5px'
    }
]

const List: React.FC = () => {
    const {setTableRef, fetchData, isFetching, filters} = useStores().tableGridDataStore

    return (
        <TableGrid<IUser> columns={columns}
                          data={fetchData}
                          isLoading={isFetching}
                          maxBodyHeight={bodyOffset => `calc(100vh - ${bodyOffset + 24}px)`}
                          ref={ref => setTableRef(ref)}
                          placeholder={hasData => {
                              if (!!filters.search && !hasData) {
                                  return 'По вашему запросу ничего не найдено :('
                              }

                              return 'Нет данных для отображения'
                          }}
                          onRowClick={data => alert(
                              JSON.stringify(data, null, 2)
                          )}/>
    )
}

export default observer(List)