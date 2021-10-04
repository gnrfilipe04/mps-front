import styled from 'styled-components';

interface IAsideItemContainer {
  isActive?: boolean;
}

export const AsideItemContainer = styled.div<IAsideItemContainer>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
  cursor: pointer;
  color: ${props => props.isActive ? props.theme.colors.textActive : props.theme.colors.textDesactive};

  :hover {
    color: white;
  }
`;

export const AsideItemName = styled.h5`
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;

`;
