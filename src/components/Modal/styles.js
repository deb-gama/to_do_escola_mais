import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(80%);

  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin: 10px;
  }

  button {
    width: 100px;
    height 30px;
    margin: 10px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.green};
  }
`;
