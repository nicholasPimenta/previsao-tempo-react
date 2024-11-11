import styled from "styled-components";

const MainInfos = styled.section`
  background: var(--clima);
  justify-content: center;
  color: var(--branco);
  align-items: center;
  border-radius: 10px;
  display: flex;
  p {
    font-weight: 500;
  }
  .Temp {
    font-size: 32px;
  }
  .Desc {
    text-transform: capitalize;
    font-size: 20px;
  }
  @media (max-width: 374px) {
    padding: 10px;
    text-align: center;
    .Temp {
      font-size: 28px;
    }
    .Desc {
      font-size: 18px;
    }
  }
`
export default MainInfos;