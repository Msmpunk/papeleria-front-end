import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { Typography } from "../../Wrappers/Wrappers";
import Grid from '@material-ui/core/Grid';
//  STYLES
import useStyles from "./styles";

import addUserImg from './ventas.svg'

import Paper from '@material-ui/core/Paper';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Detail(props){
    const { handleClick, data, dialogStatus } = props
    const classes = useStyles();

    
    const dataArray = data.map((info, index) => {
        return (
          <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>

                    <Typography className={classes.text} color="secondary" weight='light' variant="subtitle1">
                        Id de producto: <span>{info.id_producto}</span>
                    </Typography>
                    <Typography className={classes.text} color="secondary" weight='light' variant="subtitle1">
                        Status: <span>{info.message}</span>
                    </Typography>
                    <Typography className={classes.text} color="secondary" weight='light' variant="subtitle1">
                        Descipción: <span>{info.descripcion_producto}</span>
                    </Typography>
                    <Typography className={classes.text} color="secondary" weight='light' variant="subtitle1">
                        Marca: <span>{info.marca_producto}</span>
                    </Typography>
                </Paper>
            </Grid>
          </>
        )
    })

    
    return (
        <>
            <Dialog
                className={classes.dialog}
                open={dialogStatus}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth="md"
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div className={classes.dialogBox} >
                    <Typography className={classes.text} color="primary" weight='light' variant="h4" >
                        Detalles de movimiento
                    </Typography>
                    <img className={classes.tokenImg} alt="token" src={addUserImg}></img>
                    <DialogContent className={classes.gridD}>
                        <Grid container spacing={3}>
                            {dataArray}
                        </Grid>
                        

                    </DialogContent>
                    <div className={classes.ButtonsValidations}>
      
                        <Button
                            onClick={() => {
                                handleClick(false)
                            }}
                            variant="outlined" className={classes.btnBlue} color="primary">
                            Cancelar
                        </Button>

                    </div>
                </div>

            </Dialog>
        </>
      )
}
