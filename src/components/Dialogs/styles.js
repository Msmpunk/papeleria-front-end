import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dialog: {
    textAlign: 'center',
  },
  dialogBox:{
    padding: '3em 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  text: {
    margin: '.5em 0'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1em 0',
  },
  dataText: {
    fontWeight: 'bold',
  },
  tokenImg: {
    width: "80px",
    margin: "1em auto"
  },
  tokenField: {
    width: "60%",
    margin: "1em auto"
  },
  btnBlue: {
    margin: '1em 2em',
    borderRadius: '50px'
  },
  ButtonsValidations:{
    margin: '2em 0',
    borderRadius: '50px'
  }
}));
