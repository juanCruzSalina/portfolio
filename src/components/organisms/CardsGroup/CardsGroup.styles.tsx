import styled from 'styled-components';

export const CardsContainer = styled.section<{cards: number}>`
  height: calc(100% * (${props => props.cards} * 1.30));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &::-webkit-scrollbar {
    display: none;
  }
`;
