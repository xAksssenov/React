import { FC } from "react"
import styled from "styled-components"

const Card = styled.div`
    padding: 1em;
    margin: 1em;
    border: 1px solid #ddd;
    border-radius: 1em;
    background-color: var(--theme-text);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }
`

const CardTitle = styled.div`
    font-size: 1.3em;
    font-weight: 700;
    padding: 0.4em;
    color: var(--theme);
`

const CardText = styled.div`
    font-size: 1em;
    color: var(--theme);
    font-weight: 500;
`

interface DataType {
    country: string;
    name: string;
}

export const ProductCard: FC<{ data: DataType }> = ({ data }) => (
    <Card>
        <CardTitle>{data.name}</CardTitle>
        <CardText>{data.country}</CardText>
    </Card>
)
