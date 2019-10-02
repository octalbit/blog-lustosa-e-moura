import styled from 'styled-components'

export const Titlebox = styled.h3`
    font-size:  25px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    letter-spacing: .1rem;
    color: #333;
    padding: 0px 0px 30px 0px;

    &::before {
        content: '';
        margin: 0px auto 15px;
        width: 70px;
        height: 5px;
        display: block;
        background-color: #B88A34;
    }
`