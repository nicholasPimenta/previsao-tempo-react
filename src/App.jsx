/* Import Styles */ 
import InfosClima from "./styles/InfosClima";
import OtherInfos from "./styles/OtherInfos";
import MainInfos from "./styles/MainInfos";
import Container from "./styles/Container";
import ErrorMsg from "./styles/Error";
import Clima from "./styles/Clima";
import Form from "./styles/Form";

/* Outros Imports */
import { useState } from "react";
import axios from "axios";
import _ from 'lodash';

function App() {
  /* UseStates */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cidade, setCidade] = useState("");
  const [data, setData] = useState(null);

  /* Mecanismo de pesquisa */
  const handleSearch = async (e) => {
    e.preventDefault();
    const cidade = e.target.elements.cidade.value;
    debouncedSearch(cidade);

    if (!cidade) {
      setErrorMsg("Por favor, digite uma cidade!")
      setCidade("");
      setData(null);
      return;
    }
  };

  /* Renderiza a pesquisa da cidade */
  const debouncedSearch = _.debounce(async (cidade) => {
    if (cidade !== "" && !isLoading) {
      setIsLoading(true);
      try {
        const API_KEY = "YOUR_KEY_HERE";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${API_KEY}&units=metric&lang=pt_br`;
        const resposta = await axios.get(url);
        setData(resposta.data);
        setErrorMsg(null);
      } catch (error) {
        setErrorMsg("Cidade não encontrada.", error);
        setData(null);
        return;
      } finally {
        setIsLoading(false);
        setCidade("");
      }
    }
  }, 500)

  return (
    <Container>
      <Clima>
        <Form onSubmit={handleSearch}>
          <h2>Confira o clima da sua cidade:</h2>
          <form>
            <input
              id="cidade"
              type="text"
              placeholder="Escreva a cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </Form>
        {data && !errorMsg && (
          <section>
            <h3>{data.name}, {data.sys.country}</h3>
            <MainInfos>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p className="Temp">{Math.round(data.main.temp)}°C</p>
                <p className="Desc">{data.weather[0].description}</p>
              </div>
            </MainInfos>
            <OtherInfos>
              <InfosClima>
                <i className="bi bi-thermometer-sun"></i>
                <div>
                  <p className="Infos">Temp. max</p>
                  <p>{data.main.temp_max.toFixed(0)}Cº</p>
                </div>
              </InfosClima>
              <InfosClima>
                <i className="bi bi-thermometer-snow"></i>
                <div>
                  <p className="Infos">Temp. min</p>
                  <p>{data.main.temp_min.toFixed(0)}Cº</p>
                </div>
              </InfosClima>
              <InfosClima>
                <i className="bi bi-tornado"></i>
                <div>
                  <p className="Infos">Vento</p>
                  <p>{data.wind.speed.toFixed(0)} km/h</p>
                </div>
              </InfosClima>
              <InfosClima>
                <i className="bi bi-droplet"></i>
                <div>
                  <p className="Infos">Umidade</p>
                  <p>{data.main.humidity} %</p>
                </div>
              </InfosClima>
            </OtherInfos>
          </section>
        )}
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </Clima>
    </Container>
  );
}

export default App;