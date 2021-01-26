import React, { useState, useEffect } from "react";
import {
  Grid
} from "@material-ui/core";

// styles
import useStyles from "./styles";
// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";

import Table from "./components/Table/Table";
import { getProductsRequest } from '../../services/products'

export default function Dashboard(props) {
  var classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProductsRequest()
      setData(result.data);
    }
    fetchData()
  },[setData]);

  return (
    <>
      <PageTitle title="¡Bienvenido a tu papeleria online!"/>
        <Grid item >
          <Grid item xs={12}>
            <Widget
              title="Lista de prodcutos"
              upperTitle
              noBodyPadding
              bodyClass={classes.tableWidget}
            >
              <Table data={data} />
            </Widget>
          </Grid>
        </Grid>
    </>
  );
}
