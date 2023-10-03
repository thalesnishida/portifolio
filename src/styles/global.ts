import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.default};

    -webkit-font-smoothing: antialiased;
  }

  body, p, textarea, span, a, ul {
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme['gray-dark-950']};
  }
`
