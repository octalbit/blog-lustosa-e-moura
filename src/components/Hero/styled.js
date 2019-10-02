import styled from 'styled-components'

import BgHero from '../../images/bg-hero.jpg'

export const HeroWrapper = styled.section`
    width: 100%;
    height: 600px;
    background-image: url(${BgHero});
    background-position: center;
    background-size: cover;
`
export const HeroContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    height: 100%;
`
export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeroBannerBox = styled.div`
    max-width: 700px;
`
export const HeroBannerColor = styled.span`
    color: #B88A34;
`
export const HeroBannerTitle = styled.h1`
    font-size: 60px;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding: 0px 0px 30px 0px;
`
export const HeroBannerSubtitle = styled.p`
    font-size: 1.0rem;
    text-align: center;
    color: #eee;
    line-height: 1.3rem;
`