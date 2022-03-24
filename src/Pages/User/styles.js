import styled from "styled-components";

export const CardsContainer = styled.div`
  text-align: center;

  .toDoContainer {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width: 90vw;
    max-height: 80vh;
    overflow: scroll;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.font_black};
    background-color: ${(props) => props.theme.colors.bg_box};
    border-radius: 10px;
  }

  h1 {
    max-width: 90vw;
    margin: 0 auto;
    padding: 20px;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.title};
    font-family: ${(props) => props.theme.fonts.h1_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
  }

  .backToHome {
    width: 250px;
    height: 40px;
    margin: 20px;
    background-color: ${(props) => props.theme.colors.title};
    border-radius: 8px;
    border: none;
    font-family: ${(props) => props.theme.fonts.h2_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.bg_box};
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.h2_font};
    weight: ${(props) => props.theme.fonts.h2_weight};
  }
`;
