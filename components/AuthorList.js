import styled from "styled-components"
import Author from "./Author"

export default function AuthorList( { authors }) {
    return <Wrapper>
        { authors.map(a => <Author author={a.name} country={a.country}/>)}
    </Wrapper>
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`