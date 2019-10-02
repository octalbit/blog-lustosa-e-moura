import styled from 'styled-components'
import { Link } from 'gatsby'

export const FooterWrapper = styled.footer`
    width: 100%;
`
export const FooterContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
`
export const FooterContent = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const FooterTextCopy = styled.p`
    color: #333;
    font-weight: 300;
    text-transform: uppercase;
`
export const FooterCorpLink = styled(Link)`
    text-decoration: none;
`
export const FooterCorpBox = styled.img`
    max-width: 70px;
`