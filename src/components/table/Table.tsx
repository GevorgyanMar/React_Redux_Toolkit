import React, { FC } from "react";
import "./style.scss";

interface TableColumn {
  key: string;
  header: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table-block">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
