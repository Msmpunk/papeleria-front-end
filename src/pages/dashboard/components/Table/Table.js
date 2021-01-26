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
    name: 'codigo barras'
  },
  {
    name: 'descripcion producto'
  },
  {
    name: 'marca producto'
  },
  {
    name: 'categoria'
  },
  {
    name: 'proveedor'
  },
  {
    name: 'precio unitario'
  },
  {
    name: 'stock'
  },
  {
    name: 'precio_compra'
  },
  {
    name: 'fecha_compra'
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
        
        {data ? data.map((
          { id_producto,
            codigo_barras,
            descripcion_producto,
            marca_producto,
            id_categoria,
            precio_unitario,
            id_proveedor,
            stock,
            precio_compra,
            fecha_compra,
          }) => (
          <TableRow key={id_producto}>
            <TableCell className="pl-3 fw-normal">{codigo_barras}</TableCell>
            <TableCell>{descripcion_producto}</TableCell>
            <TableCell>{marca_producto}</TableCell>
            <TableCell>{id_categoria}</TableCell>
            <TableCell>{precio_unitario}</TableCell>
            <TableCell>{id_proveedor}</TableCell>
            <TableCell>{stock}</TableCell>
            <TableCell>$ {precio_compra}</TableCell>
            <TableCell>{fecha_compra}</TableCell>
          </TableRow>
        )) : []
        }
      </TableBody>
    </Table>
  );
}
