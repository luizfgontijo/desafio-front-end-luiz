import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  margin: 20px; /* Add margin to avoid cutting off content */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; /* Adjusted padding */
  border-bottom: 1px solid #ddd;
`;

export const ModalBody = styled.div`
  padding: 15px; /* Adjusted padding */
  img {
    max-width: 100%;
    border-radius: 4px;
  }
  p {
    margin: 10px 0;
  }
`;

export const ModalFooter = styled.div`
  padding: 15px; /* Adjusted padding */
  text-align: right;
  border-top: 1px solid #ddd;
`;

export const CloseButton = styled.button`
  background: none;
  border: 2px solid #ccc;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px; /* Adjusted size */
  height: 30px; /* Adjusted size */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
    border-color: #999;
  }
`;