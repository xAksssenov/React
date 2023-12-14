import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface DataType {
    country: string;
    name: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
            <section className="table__items">
                <Table dataSource={dataSource} columns={columns} pagination={false} />
                <div className="buttons__item">
                    <Button onClick={(() => setPage(() => page - 1))} disabled={!(page - 1)}>Назад</Button>
                    <Button>{page}</Button>
                    <Button onClick={(() => setPage(() => page + 1))}>Вперед</Button>
                </div>
            </section>
        </>
    )
}
export default Products;