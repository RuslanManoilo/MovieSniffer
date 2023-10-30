import styled from 'styled-components';

export const MainButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-width: 180px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    color: #fff;
    background-color: inherit;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.22),
                0px 2px 2px 0px rgba(0, 0, 0, 0.16), 
                0px 1px 5px 0px rgba(0, 0, 0, 0.14);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #FFA500;
        transform: scale(1.05);
    }
`;