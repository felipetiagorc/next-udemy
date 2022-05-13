import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --grey: #cccccc;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, #__next {
    height: 100%;
    background: var(--background);
    color: var(--white);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: var(--highlight);
  }

<<<<<<< HEAD:src/styles/global.ts
  footer { 
    background-color: 'white'
  }
=======
  header {
    grid-area: cabecalho;	// dando nome para as areas
  }
  nav {
    grid-area: navegacao;
  }
  main {
    grid-area: conteudo;
  }
  footer {
    grid-area: rodape;
  }
  body {
      display: grid;
      min-height: 100vh;	// ocupa a altura inteira
      grid-template-columns: 300px 1fr;	// 2 coluna = primeira coluna 100px + resto
      grid-template-rows: 100px 1fr 100px;	// 3 linhas = 100px(cabeçalho) + Conteúdo + Rodapé
      grid-template-areas:	// define como organizar os elementos na tela (desenhando)
          'cabecalho cabecalho'	
          'navegacao conteudo'	
          'rodape rodape';	
  }



>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0:src/styles/global-old.ts
`

export default GlobalStyles
