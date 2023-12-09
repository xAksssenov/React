import './App.css'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'Кирилл',
    age: 32,
    address: 'Полянка',
  },
  {
    key: '2',
    name: 'Андрей',
    age: 42,
    address: 'Бутырская',
  },
  {
    key: '3',
    name: 'Михаил',
    age: 12,
    address: 'Дмитровская',
  },
  {
    key: '4',
    name: 'Мария',
    age: 22,
    address: 'Бориса Галушкина',
  },
  {
    key: '5',
    name: 'Алена',
    age: 33,
    address: 'Савеловская',
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default App
