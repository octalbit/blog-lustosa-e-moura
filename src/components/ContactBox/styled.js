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
export const ContactBoxFormBox = styled.div`
	width: 100%;
	padding: 15px 10px;
`;
export const ContactBoxForm = styled.form`
	width: 100%;
	height: auto;
	box-sizing: border-box;
`;
export const ContactBoxFormInput = styled.input`
	width: 100%;
	height: 50px;
	padding: 10px;
	margin-bottom: 15px;
	box-sizing: border-box;
	border: 4px solid #171841;
	background-color: transparent;
	color: #fff;
	font-weight: 500;
`;
export const ContactBoxFormOption = styled.option`
	width: 100%;
	height: 50px;
	padding: 10px;
	margin-bottom: 15px;
	box-sizing: border-box;
	border: 4px solid #171841;
	background-color: transparent;
	color: #fff;
	font-weight: 500;
`;
export const ContactBoxFormTextArea = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 10px;
	margin-bottom: 15px;
	box-sizing: border-box;
	border: 4px solid #171841;
	background-color: transparent;
	color: #fff;
	font-weight: 500;
`;
export const ContactBoxFormBtn = styled.button`
    width: 150px;
    height: 40px;
    background-color: #B88A34;
    transition: 0.2s;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
	border: 0px;

    &:hover {
		background-color: #ffff;
        color: #111231;
    }
`;