import styled from "styled-components";

export const TodoCardContainer = styled.div`
  width: 230px;
  height: 200px;
  font-size: 1rem;
  border: solid white 2px;
  border-radius: 8px;
  margin: 5px;
  background-color: ${(props) => props.theme.colors.yellow_card};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.font_black};

  button {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    margin-top: 65px;
    border: none;
    border-radius: 8px;
  }

  .btn_create {
    background-color: ${(props) => props.theme.colors.green};
  }

  .btn_delete {
    background-color: ${(props) => props.theme.colors.red};
  }

  .btn-container {
    width: 100px;
  }
`;
