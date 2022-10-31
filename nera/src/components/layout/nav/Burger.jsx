import { Hamburger } from "./NavBar.styles";

function Burger({ open }) {
  return (
    <>
      <Hamburger open={open}>
        <div className="burger1" />
        <div className="burger2" />
        <div className="burger3" />
      </Hamburger>
      
    </>
  )
}



export default Burger;