import React from 'react';
import {
  MdPrint,
  MdUsb,
  MdSettings,
  MdPerson,
  MdFindReplace,
} from 'react-icons/md';
import AsideBarItem from '../AsideBarItem';
import { Container } from './styles';

const AsideBar = () => {
  return (
    <Container>
      <AsideBarItem
        name="Monitorados"
        icon={<MdPrint size={30} style={{ marginRight: 20 }} />}
      />
      {/* <AsideBarItem
        name="USB"
        icon={<MdUsb size={30} style={{ marginRight: 20 }} />}
      /> */}
      {/* <AsideBarItem
        name="Validações"
        icon={<MdFindReplace size={30} style={{ marginRight: 20 }} />}
      /> */}
      <AsideBarItem
        name="Configurações"
        icon={<MdSettings size={30} style={{ marginRight: 20 }} />}
      />
      {/* <AsideBarItem
        name="Conta"
        icon={<MdPerson size={30} style={{ marginRight: 20 }} />}
      /> */}
    </Container>
  );
};

export default AsideBar;
