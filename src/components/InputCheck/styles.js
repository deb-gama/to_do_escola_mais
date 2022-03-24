import styled from "styled-components";

export const InputContainer = styled.div`
  p {
    font-family: ${(props) => props.theme.fonts.h1_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
    font-size: 2rem;
    margin: 5px;
  }

  .done {
    color: ${(props) => props.theme.colors.green};
  }

  .toDo {
    color: ${(props) => props.theme.colors.red};
  }

  input {
    width: 20px;
    height: 20px;
  }

  .checkbox:checked:before {
    background-color: ${(props) => props.theme.colors.green};
  }
`;
