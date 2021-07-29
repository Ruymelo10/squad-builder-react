import styled from 'styled-components';

export const InsertPlayerWrap = styled.div`
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50vw;
  h1 {
    align-self: center;
    font-size: 3rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
export const PlayerInputs1 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;

export const PlayerInputs2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vh 0 3vh 0;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  input {
    font-size: 20px;
    margin: 0.5vh 1vw;
    padding: 0 5px;
    height: 35px;
    border: 1px solid #656464;
    border-radius: 10px;
  }
`;
export const PositionOption = styled.select`
  display: flex;
  font-size: 20px;
  align-items: center;
  padding: 0 5px;
  height: 35px;
  border-radius: 10px;
  background-color: white;
  select {
    cursor: pointer;
  }
`;
