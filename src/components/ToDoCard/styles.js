import styled from "styled-components";

export const TodoCardContainer = styled.div`
  width: 230px;
  height: 200px;
  font-size: 1.2rem;
  border-radius: 8px;
  margin: 5px;
  background-color: ${(props) => props.theme.colors.card};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  button {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border: none;
    border-radius: 8px;
  }

  .btn_create {
    background-color: ${(props) => props.theme.colors.card};
  }

  .btn-container {
    width: 100px;
  }

  h2 {
    margin: 15px;
    font-family: ${(props) => props.theme.fonts.h2_font};
    weight: ${(props) => props.theme.fonts.h2_weight};
  }
`;
