import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { InputText } from "../../Wrappers/Wrappers";
import { Typography } from "../../Wrappers/Wrappers";
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
//  STYLES
import useStyles from "./styles";

import addUserImg from './user.svg'
import { addClient } from '../../../services/clients'
import { useSnackbar } from 'notistack';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddClient(props){
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [dataForm, setDataForm] = useState({
        nombre: '',
        razon_social: '',
        calle: '',
        numero: '',
        colonia: '',
        estado: '',
        codigo_postal: '',
        email: ''
    })

    const [isLoading, setIsLoading] = useState(false);

    const { dialogStatus, handleClick } = props;

    const handleChange = name => event => {
        let { value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    function handleClickVariant(message, variant) {
        enqueueSnackbar(message, { variant });
    };

    const action = async () => {
    
        const response = await addClient(dataForm)
        setIsLoading(true)
        if(response.status){
            handleClickVariant('Datos Guardados' , 'success')
            handleClick(false)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            handleClickVariant('Error ll guardar la información' , 'error')
        }
    
    }
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
                        Agregar Cliente
                    </Typography>
                    <img className={classes.tokenImg} alt="token" src={addUserImg}></img>
                    <Typography className={classes.text} color="primary" weight='light' variant="subtitle1">
                        Ingresa los datos necesarios
                    </Typography>
                    <DialogContent>
                        {/* nombre, razon_social, calle, numero, colonia, estado, codigo_postal */}

                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <InputText
                                handleChange={handleChange}
                                name={'nombre'}
                                value={dataForm.nombre}
                                label={'Nombre'}
                                isRequired={true}
                                adornment={''}
                                />
                                <InputText
                                handleChange={handleChange}
                                name={'razon_social'}
                                value={dataForm.razon_social}
                                label={'Razon Social'}
                                isRequired={true}
                                adornment={''}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputText
                                handleChange={handleChange}
                                name={'calle'}
                                value={dataForm.calle}
                                label={'Calle'}
                                isRequired={true}
                                adornment={''}
                                />
                                <InputText
                                handleChange={handleChange}
                                name={'numero'}
                                value={dataForm.numero}
                                label={'Numero'}
                                isRequired={true}
                                adornment={''}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputText
                                handleChange={handleChange}
                                name={'colonia'}
                                value={dataForm.colonia}
                                label={'Colonia'}
                                isRequired={true}
                                adornment={''}
                                />
                                <InputText
                                handleChange={handleChange}
                                name={'estado'}
                                value={dataForm.estado}
                                label={'Estado'}
                                isRequired={true}
                                adornment={''}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputText
                                handleChange={handleChange}
                                name={'codigo_postal'}
                                value={dataForm.codigo_postal}
                                label={'Codigo Postal'}
                                isRequired={true}
                                adornment={''}
                                />
                                <InputText
                                handleChange={handleChange}
                                name={'email'}
                                value={dataForm.email}
                                label={'Correo Electronico'}
                                isRequired={true}
                                adornment={''}
                                />
                            </Grid>
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
