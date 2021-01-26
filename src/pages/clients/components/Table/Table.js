import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
// import useStyles from "../../styles";

const keyTable = [
  {
    name: 'Nombre'
  },
  {
    name: 'Calle'
  },
  {
    name: 'Colonia'
  },
  {
    name: 'Estado'
  },
  {
    name: 'Numero'
  },
  {
    name: 'Razon Social'
  },
]

export default function TableComponent({ data }) {
  // const classes = useStyles();
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keyTable.map((data, i) =>( <TableCell key={i}>{data.name}</TableCell>))}
        </TableRow>
      </TableHead>
      <TableBody>
        
        {data ? data.map(({ id_cliente, nombre, calle, colonia, estado, numero, razon_social }) => (
          <TableRow key={id_cliente}>
            <TableCell className="pl-3 fw-normal">{nombre}</TableCell>
            <TableCell>{calle}</TableCell>
            <TableCell>{colonia}</TableCell>
            <TableCell>{estado}</TableCell>
            <TableCell>{numero}</TableCell>
            <TableCell>{razon_social}</TableCell>
          </TableRow>
        )) : []
        }
      </TableBody>
    </Table>
  );
}
