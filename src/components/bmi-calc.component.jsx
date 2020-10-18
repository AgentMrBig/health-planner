import React from 'react'
import {Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '275px',
    height: '275px',
    border: '2px solid red'
  },
  
})

export default function BmiCalc() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography>
        Test
      </Typography>
    </Paper>
  )
}
