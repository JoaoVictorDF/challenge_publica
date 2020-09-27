import React, { useState } from "react";

import Input from "../../components/input";
import Table from "../../components/table";
import { Container } from "./styles";

const Main = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [ident, setIdent] = useState(1);
  const [minTemporada, setMinTemporada] = useState(0);
  const [maxTemporada, setMaxTemporada] = useState(0);
  const [minRecorde, setMinRecorde] = useState(0);
  const [maxRecorde, setMaxRecorde] = useState(0);

  const columns = [
    "Jogo",
    "Placar",
    "Mínimo da temporada",
    "Máximo da temporada",
    "Quebra recorde min",
    "Quebra recorde max",
  ];

  const handleSalvar = () => {
    if (value > 0 && value < 1000) {
      var objTemp = updateValoresTemporada(value);

      const obj = {
        jogo: ident,
        placar: value,
        min_temporada: objTemp.minTemporada,
        max_temporada: objTemp.maxTemporada,
        min_recorde: objTemp.minRecorde,
        max_recorde: objTemp.maxRecorde,
      };

      setData((prevArray) => [...prevArray, obj]);
      updateIdent();
    } else {
        alert('Só são permitidos números entre 1 e 1000')
    }
  };

  const updateIdent = () => {
    var temp = ident;
    setIdent(temp + 1);
  };

  const updateValoresTemporada = (value) => {
    var minTemporadaTemp = minTemporada;
    var maxTemporadaTemp = maxTemporada;
    var minRecordeTemp = minRecorde;
    var maxRecordeTemp = maxRecorde;

    if (minTemporada === 0) {
      setMinTemporada(value);
      minTemporadaTemp = value;
    } else if (minTemporada > value) {
      setMinTemporada(value);
      minTemporadaTemp = value;
      setMinRecorde(minRecorde + 1);
      minRecordeTemp = minRecorde + 1;
    }

    if (maxTemporada === 0) {
      setMaxTemporada(value);
      maxTemporadaTemp = value;
    } else if (maxTemporada < value) {
      setMaxTemporada(value);
      maxTemporadaTemp = value;
      setMaxRecorde(maxRecorde + 1);
      maxRecordeTemp = maxRecorde + 1;
    }

    return {
      minTemporada: minTemporadaTemp,
      minRecorde: minRecordeTemp,
      maxTemporada: maxTemporadaTemp,
      maxRecorde: maxRecordeTemp,
    };
  };

  return (
    <Container>
      <Input setValue={setValue} value={value} onClick={handleSalvar} />
      {data.length !== 0 &&
        <Table columns={columns} data={data} />
      }   
    </Container>
  );
};

export default Main;
