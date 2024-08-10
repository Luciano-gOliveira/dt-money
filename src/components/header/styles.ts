import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
` 

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 8rem;

    button{
        border: none;
        height: 2.5rem;
        padding: 0 3rem; 
        border-radius: 0.25rem;
        background: var(--blue-light);
        color: #FFF;
        transition: 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`