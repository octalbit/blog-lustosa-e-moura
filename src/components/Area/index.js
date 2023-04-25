import React from 'react';

import areas from './content';
import * as S from './styled';

import TitleBox from '../TitleBox';

const Area = () => (
	<S.AreaWrapper>
		<S.AreaContainer>
			<S.AreaContent>
				<TitleBox text="área de atuação" />
				<S.AreaBoxItems>
					{areas.map((id, i) => (
						<S.AreaBoxItem key={i}>
							<S.AreaImgItem src={id.img} alt={id.area} />
							<S.AreaTitleItem>{id.area}</S.AreaTitleItem>
							<S.AreaTextItem>{id.desc}</S.AreaTextItem>
						</S.AreaBoxItem>
					))}
				</S.AreaBoxItems>
			</S.AreaContent>
		</S.AreaContainer>
	</S.AreaWrapper>
);

export default Area;
