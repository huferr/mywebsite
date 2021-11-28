import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel.component';
import { Item } from '../../components/Carousel/Item.component';
import { Projects } from '../../data/projects';
import {
  Container,
  Title,
  Subtitle,
  Project,
  ProjectTitle,
  ProjectImg,
  Projectlanguages,
  ProjectContent,
  ProjectPlatform,
  CarouselWrapper,
} from './Portfolio.styles';


export const Portfolio: React.FC = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
      <Subtitle>Check out the projects I have been
        working on and my own projects as well.
      </Subtitle>
      <CarouselWrapper>
        <Carousel>
          {Projects?.map((p) => {
            return (
              <Item key={p.id}>
                <Project>
                  <ProjectTitle>{p.name}</ProjectTitle>
                  <ProjectImg src={p.image}/>
                  <Projectlanguages>{p.languages}</Projectlanguages>
                  <ProjectPlatform>{p.platform}</ProjectPlatform>
                  <ProjectContent>{p.content}</ProjectContent>
                </Project>
              </Item>
            );
          })}
        </Carousel>
      </CarouselWrapper>

    </Container>
  );
};