import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: -5rem;

    div{
        background: var(--shape);
        padding: 2.5rem 3rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        Header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong{
            display: block;
            padding-top: 1rem;
            font-weight: 500;
            font-size: 2rem;
            line-height: 2rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`