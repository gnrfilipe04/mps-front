import React from 'react';
import { Container, ContainerRight } from './styles';
import Logo from '../Logo';
import { MdMoreVert } from 'react-icons/md';
import { InputSearch } from '../InputSearch';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ContainerRight>
        <InputSearch />
        {/* <MdMoreVert size={30} color='#fff'/> */}
      </ContainerRight>
    </Container>
  );
};

export default Header;
