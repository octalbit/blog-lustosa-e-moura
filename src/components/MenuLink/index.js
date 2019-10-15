import React from 'react';

import links from './content';
import * as S from './styled';
import Toggle from '../Toggle';

const MenuLinks = () => (
	<S.MenuLinksWrapper>
		<S.MenuLinksList>
			{links.map((link, i) => (
				<S.MenuLinksItem key={i}>
					<S.MenuLinksLink activeClassName="active" to={link.url}>
						{link.label}
					</S.MenuLinksLink>
				</S.MenuLinksItem>
			))}
			<S.MenuLinksBtn to={/contact/}>Consulta</S.MenuLinksBtn>
		</S.MenuLinksList>
		<Toggle />
	</S.MenuLinksWrapper>
);

export default MenuLinks;
