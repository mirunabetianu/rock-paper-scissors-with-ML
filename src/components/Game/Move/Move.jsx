import React, { useEffect, useState } from 'react';
import sImage from '../../../assets/images/scissors.png';
import rImage from '../../../assets/images/rock.png';
import pImage from '../../../assets/images/paper.png';
import { Container, ImageContainer, Title } from './elements';
import moves from '../../_shared/moves';

const Move = ({ selected = moves.Paper, shuffle, title }) => {
  const [selectedImage, setSelectedImage] = useState(sImage);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!shuffle) return;
      switch (selectedImage) {
        case sImage:
          setSelectedImage(rImage);
          break;
        case pImage:
          setSelectedImage(sImage);
          break;
        default:
          setSelectedImage(pImage);
      }
    }, 500);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    if (!selected) return;
    switch (selected) {
      case moves.Paper:
        setSelectedImage(pImage);
        break;
      case moves.Rock:
        setSelectedImage(rImage);
        break;
      default:
        setSelectedImage(sImage);
    }
  }, [selected]);
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <img src={selectedImage} alt={''} />
      </ImageContainer>
    </Container>
  );
};

export default Move;