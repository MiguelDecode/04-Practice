import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

function ComponentesEstilizados() {
  const mainColor = "#db7093";
  const mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `background-color ${time} ease-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
  `;

  const Title = styled.h3`
    background-color: ${mainColor};
    /* background-color: ${(props) => props.color}; */
    /* background-color: ${({ color }) => color}; */
    background-color: ${({ color }) => color || "#000"};
    padding: 2rem;
    text-align: center;
    transition: ${setTransitionTime(".5s")};
    animation: ${fadeIn} 4s ease-in-out;

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const light = {
    color: "#222",
    bgColor: "#ddd",
  };

  const dark = {
    color: "#ddd",
    bgColor: "#222",
  };

  return (
    <>
      <h2>Styled Components</h2>
      <Title>Hola soy un h3 estilizado con styled-components</Title>
      <Title color="#61dafb">
        Hola soy un h3 estilizado con styled-components
      </Title>
      <Title isButton>Soy un h3 estilizado como botón</Title>
      <Title isNoButton>Soy un h3 estilizado como botón</Title>

      <ThemeProvider theme={light}>
        <Box>Soy una caja modo claro</Box>
        <BoxRounded>Soy una caja modo claro redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja modo oscuro happy</Box>
        <BoxRounded>Soy una caja modo oscuro redondeada</BoxRounded>
      </ThemeProvider>
    </>
  );
}

export default ComponentesEstilizados;
