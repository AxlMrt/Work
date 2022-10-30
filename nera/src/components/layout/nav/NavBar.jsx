import { Link, Logo, NavLinks, SocialIcons, StyledNav, Themeicon } from "./NavBar.styles";
import { FaFacebook, FaInstagram, FaMoon, FaSun } from "react-icons/fa"
import {motion} from "framer-motion"
 
const NavBar = ({theme, toggleTheme}) => {
  const NavItems = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition:{
        delayChildren: 0.3,
        staggerChildren: 0.2,
    }},
  }

  const item = {
    hidden: { opacity: 0, y: -100, },
    visible: { opacity: 1, y: 0, }
  }
  return ( 
    <>
      <StyledNav initial="hidden" animate="visible" variants={NavItems}>
          <Logo variants={item}>
            Nera<span>Sandwicherie</span>
          </Logo>
        <NavLinks>
          <Link href="/" variants={item}>Accueil</Link>
          <Link href="#" variants={item}>Menu</Link>
        </NavLinks>
        <Themeicon onClick={toggleTheme} colorTheme={theme} variants={item}>
          {theme === 'light' ? <FaMoon /> : <FaSun /> }
        </Themeicon>
        <SocialIcons>
          <motion.div variants={item}>
            <a href="https://www.facebook.com/profile.php?id=100026806789522">
              <FaFacebook />
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a href="https://www.instagram.com/nera_sandwicherie/?hl=fr">
              <FaInstagram />
            </a>
          </motion.div>
        </SocialIcons>
      </StyledNav>
  </>)
}

export default NavBar;