// src/TableRow.js
import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr>
      <td><img src={data.image} alt={data.name} width="30" /></td>
      <td>{data.name}</td>
      <td>{data.symbol.toUpperCase()}</td>
      <td>${data.current_price}</td>
      <td>{data.total_volume}</td>
    </tr>
  );
};

export default TableRow;
