import styled from 'styled-components';

export const ImagesGallery = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const ItemImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

export const ActorInfo = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
`;