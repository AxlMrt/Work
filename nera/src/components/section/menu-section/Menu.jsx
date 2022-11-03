import React from "react";
import white from "./assets/whiteCard.png"
import black from "./assets/blackCard.png"
import { ImageContainer, MenuDiv } from "./assets/Menu.styles";
import Carousel, { CarouselItem } from "./Carousel";
import data from "./assets/data"

function Menu({theme}) {
  const sandwichs = data.map((current, idx) => {
    return (
      <CarouselItem key={idx}>
        <p>{current.nom}</p>
        <img src={current.url} alt={current.nom}/>
      </CarouselItem>
    )
  });

  return (
    <MenuDiv>
      <h2>Nos sandwichs et menus</h2>
      <ImageContainer>
        <div>
          <Carousel>
            {sandwichs}
          </Carousel>
        </div>
        <div>
          <img className="card" src={theme === "dark" ? black : white } alt="restaurant-card"/>
        </div>
        
      </ImageContainer>
    </MenuDiv>
    
  )
}

export default Menu;