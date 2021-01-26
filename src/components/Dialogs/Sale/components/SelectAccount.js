import React, { useState, useEffect } from "react";

import { getClientsRequest } from '../../../../services/clients'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from "../styles";

export default function SelectClient(props) {
  
    const classes = useStyles();

    const { handleChange, value, label, name, index } = props
    const [data, setData] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        const result = await getClientsRequest()
        setData(result.data);
      }
      fetchData()
    },[setData]);
  
  
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
            {data ? data.map((post, i) =>
              <MenuItem key={post.i} value={post.id_cliente}>{`${post.nombre}`}</MenuItem>
            ) : <MenuItem  value={''}>{`No hay datos`}</MenuItem>}
          </Select>
        </FormControl>
      </>
    )
  }