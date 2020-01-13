import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';


const StyledSelect = styled(Select)`
  &&& {
    height: 4.3vh;
    width: 10.5vw;
    font-size: 14px;
  }
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

export const SelectInvestorType = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        Type of Investor
        </InputLabel>
        <StyledSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={filter}
        onChange={handleChange}
        labelWidth={labelWidth}
        labelHeight={100}
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value="individual">Individual</MenuItem>
        <MenuItem value="individualTrustee">Individual Trustee</MenuItem>
        <MenuItem value="company">Company</MenuItem>
        <MenuItem value="corporateTrustee">Corporate Trustee</MenuItem>
        </StyledSelect>
    </FormControl>
  )
}