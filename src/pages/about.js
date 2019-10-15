import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import About from '../components/About/index';
import * as S from '../styles/styledAbout';

const contact = () => (
	<Layout>
		<SEO title="Sobre Nós" />
		<S.StyledAboutMargin>
			<About />
			<S.StyledAboutWrapper>
				<S.StyledAboutContainer>
					<S.StyledAboutContent>
						<S.StyledAboutItem>
							<S.StyledAboutItemTitle>
								Missão
							</S.StyledAboutItemTitle>
							<S.StyledAboutItemText>
							Prestar serviços jurídicos com excelência, oferecendo soluções inovadoras para obtenção de resultados expressivos que garantam a satisfação de seus clientes.
							</S.StyledAboutItemText>
						</S.StyledAboutItem>
						<S.StyledAboutItem>
							<S.StyledAboutItemTitle>
							Visão
							</S.StyledAboutItemTitle>
							<S.StyledAboutItemText>
							Manter-se como referência nos segmentos em que atua, sendo sempre reconhecida pelos seus clientes como uma empresa moderna, inovadora e eficiente.
							</S.StyledAboutItemText>
						</S.StyledAboutItem>
						<S.StyledAboutItem>
							<S.StyledAboutItemTitle>
							Valores
							</S.StyledAboutItemTitle>
							<S.StyledAboutItemText>
							Integridade e Ética. Atuar de forma integra e ética na condução dos negócios e na relação com seus colaboradores.
							</S.StyledAboutItemText>
						</S.StyledAboutItem>
					</S.StyledAboutContent>
				</S.StyledAboutContainer>
			</S.StyledAboutWrapper>
		</S.StyledAboutMargin>
	</Layout>
);

export default contact;
