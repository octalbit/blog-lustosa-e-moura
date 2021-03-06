import React from 'react';

import * as S from './styled';

const Hero = () => (
	<S.HeroWrapper>
		<S.HeroContainer>
			<S.HeroContent>
				<S.HeroBannerBox>
					<S.HeroBannerTitle>
						Nós somos a <S.HeroBannerColor>Lustosa</S.HeroBannerColor> e{' '}
						<S.HeroBannerColor>Moura</S.HeroBannerColor>
					</S.HeroBannerTitle>
					<S.HeroBannerSubtitle>
						Somos focados na excelência do atendimento a cada cliente, proporcionando-lhe o conforto de
						estar sempre bem informado de suas causas e seguro de que a estas os sócios lhe emprestam alta
						competência técnica, desenvolvendo estratégias específicas, bem como atuam dentro de rigorosa
						ética.
					</S.HeroBannerSubtitle>
				</S.HeroBannerBox>
			</S.HeroContent>
		</S.HeroContainer>
	</S.HeroWrapper>
);

export default Hero;
