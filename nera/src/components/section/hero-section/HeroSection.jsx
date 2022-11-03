import React from "react";
import { NavLink } from 'react-router-dom';
import { FaPhone, FaRegEdit } from "react-icons/fa";
import { ContactIcons, HeroContent, ImageContainer, StyledButtons, StyledHeroSection } from "./assets/HeroSection.styles";
import {motion} from "framer-motion";


const HeroSection = ({theme}) => {

  const HeroItems = {
    hidden: { opacity: 0, },
    visible: { 
      opacity: 1, 
      transition:{
        delayChildren: 1.5,
        staggerChildren: 0.3,
    }},
  }

  const item = {
    hidden: { opacity: 0, x: -500, },
    visible: { opacity: 1, x: 0, }
  }

  return (<>
    <StyledHeroSection initial="hidden" animate="visible" variants={HeroItems} >
      <HeroContent>
        <motion.h2 variants={item}>Bienvenue chez <span>Nera</span></motion.h2>
        <motion.p variants={item}>Sandwicherie de qualitéééééé</motion.p>
        <motion.div variants={item}>
          <h3>Venez nous découvrir</h3>
        </motion.div>
        <StyledButtons>
          <motion.div variants={item}>
            <NavLink to='/menu' variants={item}>Menu</NavLink>
          </motion.div>
          <motion.div variants={item}>
            <NavLink to='/localisation' variants={item}>Localisation</NavLink>
          </motion.div>
        </StyledButtons>
      </HeroContent>
        
        <ContactIcons>
          <motion.a href="mailto:Emmanuel.fayer@gmail.com" variants={{
          hidden: { opacity: 0, x: 50, },
          visible: { opacity: 1, x: 0, }}}>
            <FaRegEdit />
          </motion.a>
          <motion.a href="tel:0983324489" variants={{
          hidden: { opacity: 0, x: 50, },
          visible: { opacity: 1, x: 0, }}}>
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