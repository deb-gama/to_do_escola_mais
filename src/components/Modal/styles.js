import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(10%);
  padding: 20px;

  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin: 10px;
  }

  button {
    width: 150px;
    height 40px;
    margin: 10px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.green};
    font-family: ${(props) => props.theme.fonts.h1_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
    
  }

  button:hover{
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.bg_box}
  }

  span{
    font-family: ${(props) => props.theme.fonts.h1_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
    font-size: 1.5rem;
  }

  span:hover{
    cursor: pointer;
    color: ${(props) => props.theme.colors.red};
  }
`;
