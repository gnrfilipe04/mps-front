import React from 'react';
import { useAsideBar } from '../../contexts/AsideBarContext';
import { AsideItemContainer, AsideItemName } from './styles';

interface IAsideBarItemProps {
  name: string;
  icon: unknown;
}

const AsideBarItem = ({ name, icon }: IAsideBarItemProps) => {
  const { changeMenuContent, menuContent } = useAsideBar()
  const active = name.toLowerCase() === menuContent ? true : false

  return (
    <AsideItemContainer 
      isActive={active} 
      onClick={() => changeMenuContent(name.toLowerCase())}>
      {icon}
      <AsideItemName>{name}</AsideItemName>
    </AsideItemContainer>
  );
};

export default AsideBarItem;
