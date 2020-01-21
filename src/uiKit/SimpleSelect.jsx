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
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
  

export function SimpleSelect() {
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
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Sort
            </InputLabel>
            <StyledSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filter}
            onChange={handleChange}
            labelWidth={labelWidth}
            labelheight={100}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value="Progress">Sort By: Progress</MenuItem>
            </StyledSelect>
        </FormControl>
      </div>
    )
}