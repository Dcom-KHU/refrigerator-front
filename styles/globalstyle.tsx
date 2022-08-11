import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
    padding: 0;
    margin: 0;
    font-family: SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif;        
  }


  body{
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
};

button{
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
};
input{
    display: flex;
    outline: none;
    padding-left: 10px;
}
`

export default GlobalStyle;

