import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    border-bottom: 2px solid #ECECEC;
    margin-bottom: 16px;
`;

export const Navigation = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-left: 20px;
`;

export const NavigationLink = styled(NavLink)`
    font-size: 36px;
    font-weight: 800;
    padding: 8px 16px;
    margin: 12px;
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

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-left: 44px;
    padding-right: 44px;
    padding-bottom: 24px;
`;