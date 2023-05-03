import styled from 'styled-components'

export default function Book({ title, author, pages, link}) {
    return <article>
        <h1>{title}</h1>
        <h2>by {author}</h2>
        <p>Number of Pages: {pages}</p>
        <a href={link}>Learn More</a>
    </article>
}