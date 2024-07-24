import React from 'react';
import { Card, Image, Name } from './HeroCard.styles';

interface HeroCardProps {
  name: string;
  image: string;
}

function HeroCard (props: HeroCardProps){
    const {image,name}=props
  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  );
};

export default HeroCard;