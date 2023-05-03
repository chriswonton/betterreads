import styled from "styled-components"

export default function Book({ title, author, pages, link}) {
    return <BookWrapper>
        <h1>{title}</h1>
        <h2>by {author}</h2>
        <p> number of pages: {pages}</p>
        <a href={link}>Learn more</a>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 2px;
`