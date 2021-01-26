import React, { useState, useEffect } from "react";
import {
  Grid,
} from "@material-ui/core";
import { getClientsRequest } from '../../services/clients'
// styles
import useStyles from "./styles";
import Button from '@material-ui/core/Button';
// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";

import Table from "./components/Table/Table";
import Addclient from '../../components/Dialogs/Addclient/Addclient'

export default function Clients(props) {

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getClientsRequest()
      setData(result.data);
    }
    fetchData()
  });

  return (
    <>
      <PageTitle title="!Agrega un cliente¡"/>
        <div className={classes.box} >
          <div></div>
          <Button
              variant="outlined"
              className={classes.btnBlue}
              color="primary"
              onClick={() => {
                setOpen(true)
            }}
          >
            Agregar Cliente
          </Button>
        </div>

        <Grid item >
          <Grid item xs={12}>
            <Widget
              title="Lista de clientes"
              upperTitle
              noBodyPadding
              bodyClass={classes.tableWidget}
            >
              <Table data={data} />
            </Widget>
          </Grid>
        </Grid>

        <Addclient
          dialogStatus={open}
          handleClick={setOpen}
        />
    </>
  );
}
