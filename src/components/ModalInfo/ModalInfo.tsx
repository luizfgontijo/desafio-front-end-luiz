import React from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton } from './ModalInfo.styles';

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
  hero: {
    name: string;
    fullName: string;
    aliases: string[];
    description: string;
    occupation: string;
    publisher: string;
    alignment: string;
    image: string;
  };
}

function ModalInfo(props: ModalInfoProps){
    const {isOpen,onClose,hero}=props
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>{hero.name}</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <img src={hero.image} alt={hero.name} style={{ width: '100%' }} />
          <p><strong>Full Name:</strong> {hero.fullName}</p>
          <p><strong>Aliases:</strong> {hero.aliases.join(', ')}</p>
          <p><strong>Description:</strong> {hero.description}</p>
          <p><strong>Occupation:</strong> {hero.occupation}</p>
          <p><strong>Publisher:</strong> {hero.publisher}</p>
          <p><strong>Alignment:</strong> {hero.alignment}</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalInfo;