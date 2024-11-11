import styled from "styled-components";

const Form = styled.section`
  margin-bottom: 16px;
  h2 {
    font-size: 20px;
    margin-bottom: 6px;
    text-align: center;
  }
  form {
    display: flex;
    padding: 6px 10px;
    border-radius: 8px;
    align-items: center;
    border: 1px solid var(--cinza);
  }
  input, button {
    border: none;
  }
  input {
    width: 100%;
    background-color: transparent;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  @media (max-width: 374px) {
    h2 {
      font-size: 16px;
    }
  }
`

export default Form;