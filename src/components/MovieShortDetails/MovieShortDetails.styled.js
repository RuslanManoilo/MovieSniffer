import styled from "styled-components";

export const GalleryItem = styled.li`
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.22),
                0px 1px 1px 0px rgba(0, 0, 0, 0.16), 
                0px 2px 1px -1px rgba(0, 0, 0, 0.14);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    object-fit: cover;


    &:hover {
        transform: scale(1.05);
    };
`;

export const ItemImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

export const ItemTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 12px auto;
    color: #fff;
`;

