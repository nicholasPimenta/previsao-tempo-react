import { createGlobalStyle } from "styled-components";
import "./Variables.css";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Merriweather Sans", sans-serif;
  }
`;

export default Global;