import styled from 'styled-components';

export const MovieCard = styled.div`
    display: flex;
    gap: 30px;
    padding-bottom: 24px;
    border-bottom: 2px solid #ECECEC;
`;

export const MovieImage = styled.img`
    min-width: 400px;
    border-radius: 10px;
    outline: 4px solid #FFA500;
`;

export const MovieDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
`;

export const Title = styled.h2`
    color: #FFA500;
    font-weight: 800;

`;

export const Subtitle = styled.h3`
    color: #FFA500;
    font-weight: 700;

`;

export const Overview = styled.p`
    max-width: 66%;
`;