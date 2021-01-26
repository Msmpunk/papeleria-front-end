import React, { useState, useEffect } from "react";

import { getProductsRequest } from '../../../../services/products'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from "../styles";

export default function SelectProducts(props) {
  
    const classes = useStyles();

    const { handleChange, value, label, name, index } = props
    const [data, setData] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        const result = await getProductsRequest()
        setData(result.data);
      }
      fetchData()
    });
  
  
    return(
      <>
        <FormControl className={classes.select}>
          <InputLabel>{label + ' (*)'}</InputLabel>
            <Select
              value={value}
              onChange={handleChange(index)}
              inputProps={{
                name: name,
              }}
            >
            {data ? data.map((post, i) =>{
              return <MenuItem
                key={i}
                value={post.id_producto}>
                {`${post.marca_producto} - ${post.descripcion_producto} - ${post.stock}`}
                </MenuItem>
            }) : <MenuItem  value={''}>{`No hay datos`}</MenuItem>}
          </Select>
        </FormControl>
      </>
    )
  }