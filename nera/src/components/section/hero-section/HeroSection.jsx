import { FaPhone, FaRegEdit } from "react-icons/fa"
import { ContactIcons, HeroContent, ImageContainer, StyledHeroSection } from "./HeroSection.styles"
import {motion} from "framer-motion"

const HeroSection = () => {
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

  return (<>
    <StyledHeroSection initial="hidden" animate="visible" variants={HeroItems}>
      <HeroContent>
        <motion.h2 variants={item}>Bienvenue chez <span>Nera</span></motion.h2>
        <motion.p variants={item}>Sandwicherie de qualitéééééé</motion.p>
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
        <motion.img src="./images/NeraBlack.png" alt="" variants={{
          hidden: { opacity: 0, x: 0, },
          visible: { opacity: 1, x: 0, }}}
        />
      </ImageContainer>
    </StyledHeroSection>
  </>)
}

export default HeroSection