import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPage = styled.div`
    text-align: center;
    margin-top: 100px;
`;

export const ErrorTitle = styled.h2`
    font-size: 2rem;
    color: #FF0000;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;

export const HomeLink = styled(Link)`
  text-decoration: underline;
  color: #0073e6;
`;