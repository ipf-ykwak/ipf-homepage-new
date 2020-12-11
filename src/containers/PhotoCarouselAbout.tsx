import React from "react";
import styled from "styled-components";

import { responsive } from "../layouts/responsive";

import img_history from "../assets/images/About/img_history.jpg";
import img_history_2x from "../assets/images/About/img_history@2x.jpg";

const Photo = styled.div`
  width: 33.6rem;
  height: 16.8rem;

  grid-row: 1;

  background-repeat: no-repeat;
  background-size: 100.8rem;

  background-image: url(${img_history});
  @media ${responsive.conditionForTablet} {
    background-image: url(${img_history_2x});
  }
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    margin: 6.4rem 0;
  }
`;

const CarouselItems = styled.ul`
  display: flex;
  height: 100%;
  gap: 1.6rem;
`;

const PhotoItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-35.2rem * 8));
    }
  }

  width: 352px;
  animation: translateinfinite 25s linear infinite;
`;

function GetAllImages() {
  let photos = [];
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (j == 2 && i == 2) {
          break;
        }
        photos.push(
          <PhotoItem key={i * 3 + j + k * 9}>
            <Photo
              style={{
                backgroundPosition: `${i * -33.6}rem ${j * -16.8}rem`,
              }}
            />
          </PhotoItem>
        );
      }
    }
  }

  return photos;
}

export default function PhotoCarousel() {
  return (
    <Carousel>
      <CarouselItems>{GetAllImages()}</CarouselItems>
    </Carousel>
  );
}
