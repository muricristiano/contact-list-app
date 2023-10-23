import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 1rem auto;
  padding: 0;
  text-align: center;
}

body {
  background-color: #101010;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  color: #F1EFEF;
  justify-content: center;
}

h1 {
  font-weight: 700;
}
`
