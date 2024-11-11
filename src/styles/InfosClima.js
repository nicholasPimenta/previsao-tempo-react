import styled from "styled-components";

const InfosClima = styled.div`
  border: 1px solid var(--roxo);
  justify-content: start;
  border-radius: 12px;
  align-items: center;
  padding: 12px;
  display: flex;
  gap: 12px;
  i {
    text-align: center;
    font-size: 20px;
    width: 20%;
  }
  .Infos {
    font-weight: 600;
    font-size: 14px;
  }
  .bi-thermometer-sun {
    color: var(--vermelho);
  }
  .bi-thermometer-snow {
    color: var(--roxo);
  }
  .bi-tornado {
    color: var(--verde);
  }
  .bi-droplet {
    color: var(--azul);
  }
  @media (max-width: 374px) {
    padding: 8px;
    .Infos {
      font-size: 12px;
    }
  }
`

export default InfosClima;