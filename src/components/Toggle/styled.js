import styled from 'styled-components';
import device from '../../styles/device';

export const ToggleBtn = styled.div`
    cursor: pointer;
    @media ${device.desktop} {
        display: none;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
export const ToggleBtnRow = styled.div`
    width: 100%;
    height: 5px;
    background: #333;
`