import styled from 'styled-components';
import device from '../../styles/device';
import { Link } from 'gatsby';

export const FooterWrapper = styled.footer`width: 100%;`;
export const FooterContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	height: 100%;
`;
export const FooterContent = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
    @media (max-width: 768px) {
		display: block;
        text-align: center;
		padding: 15px 0px 10px 0px;
    }
`;
export const FooterTextCopy = styled.p`
	color: #333;
	font-weight: 300;
	text-transform: uppercase;
	@media (max-width: 768px) {
		text-align: center;
		padding: 15px 0px 10px 0px;
    }
`;
export const FooterCorpLink = styled(Link)`
    text-decoration: none;
	@media (max-width: 768px) {
		padding: 0px 0px 30px 0px;
        margin: auto;
    }
`;
export const FooterCorpBox = styled.img`max-width: 70px;`;
