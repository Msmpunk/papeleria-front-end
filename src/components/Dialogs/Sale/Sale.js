import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { InputTextMulti } from "../../Wrappers/Wrappers";
import { Typography } from "../../Wrappers/Wrappers";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
//  STYLES
import useStyles from "./styles";

import addUserImg from './ventas.svg'
import SelectClient from './components/SelectAccount'
import SelectProducts from './components/SelectProducts'
import { makeSale } from '../../../services/sales'
import { useSnackbar } from 'notistack';
import AddIcon from '@material-ui/icons/Add';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Sale(props){
    const { dialogStatus, handleClick, setDataService, setOpenDetail} = props;
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const [sales, setSales] = useState([
        {
            "cantidad": '',
            "id_cliente": "",
            "id_producto": "",
        }
      ]);
    const [isLoading, setIsLoading] = useState(false);

    const updateInputMulti = index => e => {
        let newArr = [...sales];
        newArr[index].cantidad = e.target.value; 
        setSales(newArr); 
    }
    const clean = () => {
        setSales([{
            "cantidad": '',
            "id_cliente": "",
            "id_producto": "",
        }])
    }
    const handleChangeSelecSales = index => event => {
        const { value } = event.target
        let newArr = [...sales];
        newArr[index].id_producto =  value; 
        setSales(newArr); 
    }
    const handleChangeSelecClient = index => event => {
        const { value } = event.target
        let newArr = [...sales];
        newArr[index].id_cliente =  value; 
        setSales(newArr); 
    }
    const add = () => {
        let newArr = [...sales];
        if(newArr.length <= 2){
            newArr.push({
                "id_producto": '',
                "cantidad": '',
                "id_cliente":  ''
            })
            setSales(newArr); 
        }

    }

    function handleClickVariant(message, variant) {
        enqueueSnackbar(message, { variant });
    };

    const action = async () => {
        setIsLoading(true)
        const response = await makeSale(sales)
        
        if(response.status){
            setDataService(response.data)
            handleClickVariant('Venta realizada' , 'success')
            handleClick(false)
            setIsLoading(false)
            setOpenDetail(true)
            clean()
        } else {
            setIsLoading(false)
            handleClickVariant('Error al realizar la venta' , 'error')
        }
    
    }
    
    const dataArray = sales.map((data, index) => {
        return (
          <>
            <Grid container className={classes.gridD} spacing={3}>
                <Grid item xs={4}>
                    <SelectClient index={index} handleChange={handleChangeSelecClient} value={data.id_cliente} label={'cliente'} name={'id_cliente'}/>
                </Grid>
                <Grid item xs={4}>
                    <SelectProducts index={index} handleChange={handleChangeSelecSales} value={data.id_producto} label={'producto'} name={'id_producto'}/>
                </Grid>
                <Grid item xs={4}>
                    <InputTextMulti
                        index={index}
                        handleChange={updateInputMulti}
                        name={'cantidad'}
                        type={'number'}
                        value={data.cantidad}
                        label={'cantidad'}
                        isRequired={true}
                        adornment={''}
                        />

                </Grid>
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
                        Realiza una venta
                    </Typography>
                    <img className={classes.tokenImg} alt="token" src={addUserImg}></img>
                    <Typography className={classes.text} color="primary" weight='light' variant="subtitle1">
                        Ingresa los datos necesarios
                    </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.root}
                        onClick={()=> {add()}}
                        >
                        <AddIcon />
                        Agregar Producto
                    </Button>
                    <DialogContent className={classes.gridD}>
                        {dataArray}
                    </DialogContent>
                    <div className={classes.ButtonsValidations}>
                        <Button
                            onClick={() => {
                                handleClick(false)
                            }}
                            variant="outlined" className={classes.btnBlue} color="primary">
                            Cancelar
                        </Button>

                        {isLoading ? (
                        <CircularProgress size={26} className={classes.loginLoader} />
                            ) : (
                            <Button
                            onClick={() => {
                                action()
                            }}
                            variant="outlined"
                            className={classes.btnBlue}
                            color="primary"
                            >
                                Confirmar
                            </Button>
                        )}

                    </div>
                </div>

            </Dialog>
        </>
      )
}
