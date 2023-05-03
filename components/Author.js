import styled from "styled-components"

export default function Author({ author, country }) {
    return <AuthorWrapper>
        <AuthorName>Author: {author}</AuthorName>
        <AuthorCountry>Country: {country}</AuthorCountry>
    </AuthorWrapper>
}

const AuthorName = styled.h1 `
    color: green;
`

const AuthorCountry = styled.h2 `
    color: blue;
`

const AuthorWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 2px;
`