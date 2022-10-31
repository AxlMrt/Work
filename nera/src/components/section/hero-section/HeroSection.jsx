import React from "react";
import { FaPhone, FaRegEdit } from "react-icons/fa";
import { ContactIcons, HeroContent, ImageContainer, Sandwichs, StyledHeroSection } from "./HeroSection.styles";
import {motion} from "framer-motion";
import data from "./data.js";

const HeroSection = ({theme}) => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition:{
        delayChildren: 2,
        staggerChildren: 0.3,
    }},
  }

  const item = {
    hidden: { opacity: 0, x: -150, },
    visible: { opacity: 1, x: 0, }
  }

  const [image, setImage] = React.useState('./images/sandwichs/bignera.png');

  function changeImage() {
    const randomImg = Math.floor(Math.random() * data.length);
    setImage(data[randomImg].url);
  }

  /* setInterval(changeImage, 5000); */

  return (<>
    <StyledHeroSection initial="hidden" animate="visible" variants={HeroItems}>
      <HeroContent>
        <motion.h2 variants={item}>Bienvenue chez <span>Nera</span></motion.h2>
        <motion.p variants={item}>Sandwicherie de qualitéééééé</motion.p>
        
        <Sandwichs>
          <motion.img src={image} alt="sandwich" variants={item}/>
        </Sandwichs>
      </HeroContent>
        
        <ContactIcons>
          <motion.a href="mailto:Emmanuel.fayer@gmail.com" variants={{
          hidden: { opacity: 0, y: 50, },
          visible: { opacity: 1, y: 0, }}}>
            <FaRegEdit />
          </motion.a>
          <motion.a href="tel:0983324489" variants={{
          hidden: { opacity: 0, y: 50, },
          visible: { opacity: 1, y: 0, }}}>
            <FaPhone />
          </motion.a>
        </ContactIcons>
      <ImageContainer>
        <motion.img src={theme === 'light' ? "./images/logo/NeraWhite.png" : "./images/logo/NeraBlack.png"} alt="Logo Nera" variants={{
          hidden: { opacity: 0, x: 0, },
          visible: { opacity: 1, x: 0, }}}
        />
      </ImageContainer>
    </StyledHeroSection>
  </>)
}

export default HeroSection