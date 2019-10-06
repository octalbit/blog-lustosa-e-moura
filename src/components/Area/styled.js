import styled from 'styled-components';

import BgArea from '../../images/bg-area.jpg';

export const AreaWrapper = styled.section`
	width: 100%;
	height: 100%;
	background-image: url(${BgArea});
	background-position: center;
	background-size: cover;
`;
export const AreaContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	height: 100%;
`;
export const AreaContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 50px 0px;
`;
export const AreaBoxItems = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const AreaBoxItem = styled.div`
	flex: 1 1 300px;
	margin: 10px 10px;
	padding: 30px 15px;
	background-color: #fbf8f8;
`;
export const AreaImgItem = styled.img`
	display: block;
	max-width: 80px;
	margin: auto;
`;
export const AreaTitleItem = styled.h3`
	padding: 25px 0px 15px 0px;
	text-transform: uppercase;
	font-weight: 800;
	letter-spacing: .1rem;
	text-align: center;
	color: #333333;
`;
export const AreaTextItem = styled.p`
	text-align: center;
	color: #555;
	line-height: 1.3rem;
`;
