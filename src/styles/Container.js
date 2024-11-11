import styled from "styled-components";

const Container = styled.section`
  background: var(--fundo);
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  h3 {
    text-align: center;
    margin-bottom: 8px;
    font-size: 24px;
  }
  @media (max-width: 374px) {
    h3 {
      font-size: 20px;
    }
  }
`

export default Container;