import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  body{
    background: ${props => props.theme.colors.backgroundColor};
    font: 400 16px Roboto, sans-serif;
  }
  ul{
    list-style: none;
  }
`
