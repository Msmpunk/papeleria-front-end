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
    name: 'PRECIO UNITARIO'
  },
  {
    name: 'CANTIDAD'
  },
  {
    name: 'NUMERO VENTA'
  },
  {
    name: 'ID CLIENTE'
  },
  {
    name: 'FECHA DE VENTA'
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
        
        {data ? data.map(({ id_producto, precio_unitario, cantidad, numero_venta, id_cliente, fecha_venta }) => (
          <TableRow key={id_producto}>
            <TableCell className="pl-3 fw-normal">{precio_unitario}</TableCell>
            <TableCell>{cantidad}</TableCell>
            <TableCell>{numero_venta}</TableCell>
            <TableCell>{id_cliente}</TableCell>
            <TableCell>{fecha_venta}</TableCell>
          </TableRow>
        )) : []
        }
      </TableBody>
    </Table>
  );
}
