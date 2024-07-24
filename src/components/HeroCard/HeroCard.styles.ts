import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  margin: 10px;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
`;