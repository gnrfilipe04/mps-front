import styled from 'styled-components';

export const Container = styled.div`
  width: 98vw;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
`
