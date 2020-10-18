import React from 'react'
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import BmiCalc from './bmi-calc.component';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    padding: '10px'
    
  },
  
})

export default function MainContent() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="row" justify="center" alightitems="center">
      <BmiCalc />
    </Grid>
  )
}
