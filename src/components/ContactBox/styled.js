import styled from 'styled-components'
import { Link } from 'gatsby'

export const ContactBoxWrapper = styled.section`
	width: 100%;
	height: 100%;
	background-color: #111231;
`;
export const ContactBoxContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	height: 100%;
`;
export const ContactBoxContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 50px 0px;
`;
export const ContactBoxInfoBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const ContactBoxInfoItem = styled.div`
	flex: 1 1 300px;
	border: 4px solid #171841;
	margin: 10px 10px; 
`;
export const ContactBoxInfoAndress = styled.p`
	color: #fff;
	margin: 10px 20px;
	line-height: 1.4rem;
`;
export const ContactBoxInfoTel = styled.p`
	color: #B88A34;
	margin: 15px 20px;
`;
export const ContactBoxInfoTelLink = styled(Link)`
	color: #fff;

	&:hover {
		color: #B88A34;
	}
`;
export const ContactBoxInfoMail = styled.p`
	color: #B88A34;
	margin: 15px 20px;
`;
export const ContactBoxInfoMailLink = styled(Link)`
	color: #fff;

	&:hover {
		color: #B88A34;
	}
`;