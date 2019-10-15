import styled from 'styled-components';
import device from '../../styles/device';

export const AboutWrapper = styled.section`
	width: 100%;
	height: 100%;
`;
export const AboutContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	height: 100%;
`;
export const AboutContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 0px;

	@media ${device.mobile} {
		flex-direction: column;
	}
`;
export const AboutBoxText = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 15px;
`;
export const AboutBoxImg = styled.div`
	width: 100%;
	height: 100%;
	padding: 0px 15px;
`;
export const AboutTitle = styled.h3`
	font-size: 25px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: .1rem;
	color: #333;

	&::before {
		content: '';
		margin: 0px 0px 20px 0px;
		width: 70px;
		height: 5px;
		display: block;
		background-color: #b88a34;
	}
`;
export const AboutText = styled.p`
	font-size: 1.0rem;
	color: #555;
	line-height: 1.5rem;
	padding: 20px 0.5rem 0px 0.5rem;
`;
export const AboutImgBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const AboutImg = styled.img`
	padding-top: 20px;
	max-width: 350px;
`;
