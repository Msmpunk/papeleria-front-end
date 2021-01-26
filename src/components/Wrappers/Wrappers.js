import React from "react";
import {
  withStyles,
  Badge as BadgeBase,
  Typography as TypographyBase,
  Button as ButtonBase,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

// styles
var useStyles = makeStyles(theme => ({
  badge: {
    fontWeight: 600,
    height: 16,
    minWidth: 16,
  },
  form: {
    margin: '.5em 10px',
    width: '80%'
  },
}));

function Badge({ children, colorBrightness, color, ...props }) {
  var classes = useStyles();
  var theme = useTheme();
  var Styled = createStyled({
    badge: {
      backgroundColor: getColor(color, theme, colorBrightness),
    },
  });

  return (
    <Styled>
      {styledProps => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge),
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
}

function Typography({
  children,
  weight,
  size,
  colorBrightness,
  color,
  ...props
}) {
  var theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
      }}
      {...props}
    >
      {children}
    </TypographyBase>
  );
}

function Button({ children, color, className, ...props }) {
  var theme = useTheme();

  var Styled = createStyled({
    root: {
      color: getColor(color, theme),
    },
    contained: {
      backgroundColor: getColor(color, theme),
      boxShadow: theme.customShadows.widget,
      color: `${color ? "white" : theme.palette.text.primary} !important`,
      "&:hover": {
        backgroundColor: getColor(color, theme, "light"),
        boxShadow: theme.customShadows.widgetWide,
      },
      "&:active": {
        boxShadow: theme.customShadows.widgetWide,
      },
    },
    outlined: {
      color: getColor(color, theme),
      borderColor: getColor(color, theme),
    },
    select: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <ButtonBase
          classes={{
            contained: classes.contained,
            root: classes.root,
            outlined: classes.outlined,
          }}
          {...props}
          className={classnames(
            {
              [classes.select]: props.select,
            },
            className,
          )}
        >
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
}

function InputText(props) {
  var classes = useStyles();
  const { handleChange, value, label, typeError, adornment, name, type, able, disableInputs, adornmentEnd, sizeInput, isRequired } = props
  const error = typeError || '';
  const readOnly = able || false;
  const disabled = disableInputs || false;
  const maxLength = sizeInput || '50';
  const decoration = adornment ?
        <InputAdornment position="start">{adornment}</InputAdornment> :
        null
  const fullLabel = isRequired ? label + ' (*)': label
  const emptyLabel = label ? fullLabel : ''
  const decorationEnd = adornmentEnd ? adornmentEnd : null
  return (
      <FormControl className={classes.form} error={error.length > 0 ? true : false}>
        <InputLabel>{emptyLabel}</InputLabel>
        <Input
        
          value={value}
          onChange={handleChange(name)}
          startAdornment={decoration}
          endAdornment={decorationEnd}
          autoComplete='off'
          type={type ? type : 'text'}
          inputProps={{
            maxLength: maxLength,
            readOnly: Boolean(readOnly),
            step: "1",
            disabled: disabled
          }}
        />
        {error.length > 0 ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
  );
}
function InputTextMulti(props) {
  var classes = useStyles();
  const { handleChange, value, label, typeError, index, adornment, type, able, disableInputs, adornmentEnd, sizeInput, isRequired } = props
  const error = typeError || '';
  const readOnly = able || false;
  const disabled = disableInputs || false;
  const maxLength = sizeInput || '50';
  const decoration = adornment ?
        <InputAdornment position="start">{adornment}</InputAdornment> :
        null
  const fullLabel = isRequired ? label + ' (*)': label
  const emptyLabel = label ? fullLabel : ''
  const decorationEnd = adornmentEnd ? adornmentEnd : null
  return (
      <FormControl className={classes.form} error={error.length > 0 ? true : false}>
        <InputLabel>{emptyLabel}</InputLabel>
        <Input
        
          value={value}
          onChange={handleChange(index)}
          startAdornment={decoration}
          endAdornment={decorationEnd}
          autoComplete='off'
          type={type ? type : 'text'}
          inputProps={{
            maxLength: maxLength,
            readOnly: Boolean(readOnly),
            step: "1",
            disabled: disabled
          }}
        />
        {error.length > 0 ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
  );
}

export { Badge, Typography, Button, InputText, InputTextMulti};

// ########################################################################

function getColor(color, theme, brigtness = "main") {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
    return theme.palette[color][brigtness];
  }
}

function getFontWeight(style) {
  switch (style) {
    case "light":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 600;
    default:
      return 400;
  }
}

function getFontSize(size, variant = "", theme) {
  var multiplier;

  switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  var defaultSize =
    variant && theme.typography[variant]
      ? theme.typography[variant].fontSize
      : theme.typography.fontSize + "px";

  return `calc(${defaultSize} * ${multiplier})`;
}

function createStyled(styles, options) {
  var Styled = function(props) {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled);
}
