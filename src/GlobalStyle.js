import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
  --main-color: #6262cb;
  --sub-color: #9496f2;
  --font-color:  #435372;
  --sub-background-color: #d4d4d5;
  --background-color:#f6f6f7;
}
* {box-sizing : border-box}
html {
    font-size: 62.5%;
}
body {
    margin : 0;
    padding : 0;
    font-size:1.6rem;
    color:var(--font-color);
    font-family: "Apple SD Gothic Neo", 'NanumBarunGothic', '나눔바른고딕', "Malgun Gothic", sans-serif;
}
ul,ol {
    list-style: none;
}
a {
    color:var(--font-color);
    text-decoration: none;
}
.App {
    width:100%;
    max-width:390px;
    margin:0 auto;
    overflow-x:hidden;
}
`
export default GlobalStyle;