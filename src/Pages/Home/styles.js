import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.h1_font};
  text-align: center;

  h1 {
    max-width: 90vw;
    margin: 0 auto;
    padding: 20px;
    font-size: 5rem;
    color: ${(props) => props.theme.colors.title};
    font-family: ${(props) => props.theme.fonts.h1_font};
    font-weight: ${(props) => props.theme.fonts.h1_weight};
  }

  h2 {
    margin: 15px;
    font-family: ${(props) => props.theme.fonts.h2_font};
    weight: ${(props) => props.theme.fonts.h1_weight};
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.font_black};
  }

  a:hover {
    cursor: pointer;home
    color: ${(props) => props.theme.colors.green};
  }
`;
