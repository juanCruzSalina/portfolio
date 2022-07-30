import React, { useState } from 'react'
import { faBars, faContactCard, faFolder, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from '../../atoms/Link/Link';
import { CloseIcon, HomeNav, LinkLine, MenuIcon, NavGroup, SecondMenu, Wrapper } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <Wrapper>
      <HomeNav>
        <MenuIcon icon={faBars} onClick={handleOpen}/>
        <Link to='/'>Juan Cruz Salina</Link>
      </HomeNav>
      <SecondMenu show={show}>
        <CloseIcon icon={faXmark} onClick={handleClose}/>
        <NavGroup>
          <Link to='/projects' icon={faFolder}>Projects</Link>
          <LinkLine />
          <Link to='/about' icon={faUser}>About Me</Link>
          <LinkLine />
          <Link to='/contact' icon={faContactCard}>Contact</Link>
        </NavGroup>
      </SecondMenu>
    </Wrapper>
  )
}

export default Navbar