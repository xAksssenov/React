import { FC, useEffect, useState } from "react"
import axios from "axios"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { ProductCard } from "../ProductCard"

const PaginationContainer = styled.div`
  max-width: 60vw;
  margin: 0 auto;
`

const Pagination = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
`

const LoadingText = styled.div`
    text-align: center;
    font-size: 1.4em;
    margin: 1em 0;
    color: var(--theme);
`

const LoadingInView = styled.div`
    height: 3em;
    background-color: var(--theme-text);
    border-radius: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--theme);
`

interface DataType {
    country: string
    name: string
}

const LIMIT_LIST_SCHOOL = 10

export const DynamicPagination: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [dataSource, setDataSource] = useState<DataType[]>([])
    const [loading] = useState(false)

    const getUniversity = async (page: number, limit: number) => {
        const offset = (page - 1) * limit
        const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`)
        setDataSource((prev) => [...prev, ...response.data])
        return response.data
    }

    useEffect(() => {
        getUniversity(page, LIMIT_LIST_SCHOOL)
    }, [page])
    
    const { ref, inView } = useInView({
        threshold: 1.0,
    });
    
    useEffect(() => {
        if (inView && !loading) {
            setPage((prev: number) => prev + 1)
        }
    }, [inView, loading])

  return (
        <PaginationContainer>
            <h1>Cтраница университетов</h1>
            <Pagination>
                { dataSource.map((university) => (
                    <ProductCard data={university} key={university.name}></ProductCard>
                ))}
            </Pagination>
            { loading && <LoadingText>Загрузка...</LoadingText>}
            <LoadingInView ref={ref}>Дождитеcь загрузки...</LoadingInView>
        </PaginationContainer>
    )
}
