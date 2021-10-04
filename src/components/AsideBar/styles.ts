import styled from 'styled-components';

export const Container = styled.aside`
  width: 20vw;
  height: 80vh;
  margin: 10px 0;
  padding: 20px 10px;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  overflow: hidden;
  overflow-y: auto;
`;
