import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

const keyTable = [
  {
    name: 'NUMERO VENTA'
  },

  {
    name: 'CANTIDAD'
  },
  {
    name: 'PRECIO UNITARIO'
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
            <TableCell>{numero_venta}</TableCell>
            <TableCell>{cantidad}</TableCell>
            <TableCell className="pl-3 fw-normal"> ${precio_unitario}</TableCell>
            <TableCell>{id_cliente}</TableCell>
            <TableCell>{fecha_venta.substring(0,10)}</TableCell>
          </TableRow>
        )) : []
        }
      </TableBody>
    </Table>
  );
}
