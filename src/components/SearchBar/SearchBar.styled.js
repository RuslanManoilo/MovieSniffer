import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 28px;
    width: 100%;
    max-width: 680px;
    padding: 8px;
    margin: 8px;
`;

export const SearchInput = styled.input`
    width: 100%;
    color: #fff;
    background-color: inherit;
    font-size: 20px;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    box-shadow: 0px 4px 2px -3px rgba(0, 0, 0, 0.28),
                0px 3px 3px 0px rgba(0, 0, 0, 0.2), 
                0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #FFA500;
        transform: scale(1.1);
    }
`;

