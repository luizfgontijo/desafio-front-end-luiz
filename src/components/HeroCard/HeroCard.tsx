import React, { useState } from 'react';
import { Card, Image, Name } from './HeroCard.styles';
import { ModalInfo } from '../ModalInfo';



interface HeroCardProps {
  name: string;
  image: string;
  heroDetails: {
    fullName: string;
    aliases: string[];
    description: string;
    occupation: string;
    publisher: string;
    alignment: string;
  };
}

function HeroCard (props: HeroCardProps){
    const {image,name,heroDetails}= props
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Card onClick={handleOpenModal}>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
      </Card>
      <ModalInfo
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        hero={{
          name,
          fullName: heroDetails.fullName,
          aliases: heroDetails.aliases,
          description: heroDetails.description,
          occupation: heroDetails.occupation,
          publisher: heroDetails.publisher,
          alignment: heroDetails.alignment,
          image,
        }}
      />
    </>
  );
};

export default HeroCard;