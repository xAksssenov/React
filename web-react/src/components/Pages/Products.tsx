import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface DataType {
    country: string;
    name: string;
}

const TableStyle = styled(Table)`
    margin: 0 8vw;
    text-align: center;

    .ant-table-cell {
        background-color: var(--theme-text);
        color: var(--theme);
        transition: background-color 0.25s, color 0.25s;
    }

    .ant-table-row:hover .ant-table-cell {
        background-color: var(--theme);
        color: var(--theme-text);
        transition: background-color 0.25s, color 0.25s;
    }
`

const TableButtons = styled(Button)` 
    &.ant-btn {
        background-color: var(--theme-text);
        color: var(--theme);
        transition: background-color 0.25s, color 0.25s;
    }
`

const columns: ColumnsType<DataType> = [
    {
        title: 'Страна',
        dataIndex: 'country',
        key: 'country',
    },
    {
        title: 'Название школы',
        dataIndex: 'name',
        key: 'name',
    },
]

const LIMIT_LIST_SCHOOL = 10

export const Products = () => {

    const [page, setPage] = useState<number>(1)
    const [dataSource, setDataSource] = useState<DataType[]>([])

    const getUniversity = async (page: number, limit: number) => {
        const offset = (page - 1) * limit
        const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`)
        return response.data
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUniversity(page, LIMIT_LIST_SCHOOL)
            setDataSource(data);
        }

        fetchData()
    }, [page])

    return (
        <>
            <h1>Контактная страница</h1>
            <TableStyle dataSource={dataSource} columns={columns} pagination={false} />
            <div>
                <TableButtons onClick={(() => setPage(() => page - 1))} disabled={!(page - 1)}>Назад</TableButtons>
                <TableButtons>{page}</TableButtons>
                <TableButtons onClick={(() => setPage(() => page + 1))}>Вперед</TableButtons>
            </div>
        </>
    )
}
export default Products;