import styled from 'styled-components'
import { Link } from 'gatsby';

export const ToggleWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
        display: block;
    }
`;

export const ToggleBtn = styled.button`
  width: auto;
  height: 25px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const ToggleBtnLine = styled.div`
  width: 30px;
  height: 3px;
  background: #111231;
  border: none;
`;
export const ToggleBox = styled.div`
  z-index: 19000000;
  width: 100%;
  height: calc(100vh - 70px);
  background: #111231;
  position: absolute;
  top: 70px;
  right: 0px;
  transition: 0.3s;
`;

export const ToggleLinksList = styled.ul`
  display: block;
  width: 100%;
`;

export const ToggleLinksItem = styled.li`
	padding: 1.2rem 0px;
	.active {
		color: #b88a34;
	}
`;

export const ToggleLinksLink = styled(Link)`
    color: #fff;
    font-size: 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: color 0.2s;
    &:hover {
        color: #B88A34;
    }
`;
