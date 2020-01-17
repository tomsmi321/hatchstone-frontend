import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';


const StyledSelect = styled(Select)`
  &&& {
    font-size: 14px;
  }
`

const ErrorMessage = styled.div`
  margin-top: 15px;
  font-weight: bold;
  color: red;
`

const useStyles = makeStyles(theme => ({
    formControl: {
      // margin: theme.spacing(1),
      // minWidth: 152,
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const SelectInvestorType = ({ name, onChange, value, error }) => {
  const [touched, setTouched] = useState(false)
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel ref={inputLabel}>
          Type of Investor
        </InputLabel>
        <StyledSelect
          name={name}
          value={value}
          onChange={onChange}
          onOpen={() => setTouched(false)}
          onClose={() => setTouched(true)}
          labelWidth={labelWidth}
          labelheight={100}
        >
        <MenuItem value="individual" label="individual">Individual</MenuItem>
        <MenuItem value="individualTrustee" label="individualTrustee">Individual Trustee</MenuItem>
        <MenuItem value="company" label="company">Company</MenuItem>
        <MenuItem value="corporateTrustee" label="corporateTrustee">Corporate Trustee</MenuItem>
        </StyledSelect>
        { touched && error && <ErrorMessage>{error}</ErrorMessage> }
    </FormControl>
  )
}