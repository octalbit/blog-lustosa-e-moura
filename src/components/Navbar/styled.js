import styled from 'styled-components';
import device from '../../styles/device';

export const NavbarWrapper = styled.nav`
	width: 100%;
	height: 70px;
	position: fixed;
	background-color: #fff;
	box-shadow: 1px 1px 5px rgba(25, 25, 25, 0.1);
`;
export const NavbarContainer = styled.div`
	max-width: 1000px;
	margin: auto;
	height: 100%;
`;

export const NavbarContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
        padding: 0px 15px;
    }
`;
