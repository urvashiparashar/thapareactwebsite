import {createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

//adding styles
*
{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family: 'Heebo', sans-serif;
font-family: 'Roboto Condensed', sans-serif;

};
html
{
    font-size: 62.5%;
    overflow-x : hidden;
}
h1
{
    color : ${({theme})=>theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
}
`