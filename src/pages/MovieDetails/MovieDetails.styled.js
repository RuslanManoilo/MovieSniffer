import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.15em;
    padding: 8px;
    margin: 8px;
`;

export const ListAdditionalInfo = styled.ul`
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-left: 16px;
`;

export const AdditionalInfo = styled(NavLink)`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #fff;
        
    &.active {
        padding: 8px;
        border: 2px solid #FFA500;
        border-radius: 8px;
        color: #FFA500;
    };
        
    &:hover {
        transform: scale(1.05);
    };
`;