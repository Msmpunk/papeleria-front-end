import React, { useState, useEffect } from "react";
import {
  Grid,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
// import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from '@material-ui/core/Button';
import Table from "./components/Table/Table";
import { getSalesRequest } from '../../services/sales'

import SaleDialog from '../../components/Dialogs/Sale/Sale'
import Detail from '../../components/Dialogs/Detail/Detail'

export default function Sales(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [dataService, setDataService] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getSalesRequest()
      setData(result.data);
    }
    fetchData()
  },[setData]);

  return (
    <>
      <PageTitle title="Ventas"/>
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
            Agregar nueva venta
          </Button>
        </div>

        <Grid item >
          <Grid item xs={12}>
            <Widget
              title="¡ULTIMAS VENTAS!"
              upperTitle
              noBodyPadding
              bodyClass={classes.tableWidget}
            >
              <Table data={data} />
            </Widget>
          </Grid>
        </Grid>

        <SaleDialog
          dialogStatus={open}
          handleClick={setOpen}
          setDataService={setDataService}
          setOpenDetail={setOpenDetail}
        />
        <Detail
          dialogStatus={openDetail}
          data={dataService}
          handleClick={setOpenDetail}
        />
    </>
  );
}
