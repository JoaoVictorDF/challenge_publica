import React from "react";

import { Container } from "./styles";

const Table = ({ columns, data }) => {
  return (
    <Container>
      <table>
        <thead>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.jogo}</td>
              <td>{data.placar}</td>
              <td>{data.min_temporada}</td>
              <td>{data.max_temporada}</td>
              <td>{data.min_recorde}</td>
              <td>{data.max_recorde}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
