import React from 'react'

import * as S from './styled'
import TitleBox from '../TitleBox'

const BlogHome = () => (
    <S.BlogHomeWrapper>
        <S.BlogHomeContainer>
            <S.BlogHomeContent>
                <TitleBox text="Notícias" />
                <S.BlogHomeBoxItems>
                    <S.BlogHomeBoxItem>
                        <S.BlogHomeDateBoxtext>06 de Setembro de 2019</S.BlogHomeDateBoxtext>
                        <S.BlogHomeTitleBoxtext>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </S.BlogHomeTitleBoxtext>
                        <S.BlogHomeDescBoxtext>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.
                        </S.BlogHomeDescBoxtext>
                    </S.BlogHomeBoxItem>
                    <S.BlogHomeBoxItem>
                        <S.BlogHomeDateBoxtext>06 de Setembro de 2019</S.BlogHomeDateBoxtext>
                        <S.BlogHomeTitleBoxtext>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </S.BlogHomeTitleBoxtext>
                        <S.BlogHomeDescBoxtext>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.
                        </S.BlogHomeDescBoxtext>
                    </S.BlogHomeBoxItem>
                    <S.BlogHomeBoxItem>
                        <S.BlogHomeDateBoxtext>06 de Setembro de 2019</S.BlogHomeDateBoxtext>
                        <S.BlogHomeTitleBoxtext>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </S.BlogHomeTitleBoxtext>
                        <S.BlogHomeDescBoxtext>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.
                        </S.BlogHomeDescBoxtext>
                    </S.BlogHomeBoxItem>
                    <S.BlogHomeBoxItem>
                        <S.BlogHomeDateBoxtext>06 de Setembro de 2019</S.BlogHomeDateBoxtext>
                        <S.BlogHomeTitleBoxtext>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </S.BlogHomeTitleBoxtext>
                        <S.BlogHomeDescBoxtext>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.
                        </S.BlogHomeDescBoxtext>
                    </S.BlogHomeBoxItem>
                </S.BlogHomeBoxItems>
                <S.BlogHomeBoxBtn to={/blog/}>mais notícias</S.BlogHomeBoxBtn>
            </S.BlogHomeContent>
        </S.BlogHomeContainer>
    </S.BlogHomeWrapper>
)

export default BlogHome