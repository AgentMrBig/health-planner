import React, {useState, useEffect} from "react";

import {
  FormControlLabel,
  Switch,
  Divider,
  CardHeader,
  Typography,
  TextField,
  Card,
  CardContent,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minWidth: "300px",
    height: "500px",

    justifyContent: "start",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifiyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    borderRadius: "5px 5px 0px 0px",
    marginTop: "0px",
    padding: "0px",
    paddingTop: "10px",
    color: "#fff",
    backgroundColor: "#3f51b5",
  },
  title: {},
  debug: {
    border: "2px solid red",
  },
  btn:{
    marginLeft: '37%'
  }
});


export default function BmiCalc() {
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');

  const [measurment, setMeasurment] = React.useState(true);

  const handleToggle = () => {
    setMeasurment((prev) => !prev);
  };

  const CalcBMI = (w, h) => {
    var result = w / Math.pow(h, 2);
    return result;
  }
  

  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader className={classes.header} title="Body Mass Index Calculator">
        <Typography className={classes.title} variant="h6">
          BMI Calculator
        </Typography>
      </CardHeader>
      <CardContent direction="column" justify="center" alightitems="center">
        <FormControlLabel
          control={
            <Switch
              checked={measurment.standard}
              onChange={handleToggle}
              name="standard"
              color="primary"
            />
          }
          label="Standard Measurement System"
        />
        <Divider />
        <Typography
          style={{ padding: 8 + "px" }}
          className={classes.title}
          variant="subtitle1"
        >
          Enter You Height
        </Typography>

        <TextField
          style={{ padding: 8 + "px" }}
          id="feet"
          label={measurment === false ? "Feet" : "Meters"}
          variant="outlined"
        />
        <TextField
          style={{ padding: 8 + "px" }}
          id="inches"
          label={measurment === false ? "Inches" : "Centimeters"}
          variant="outlined"
        />

        <Typography
          style={{ padding: 8 + "px" }}
          className={classes.title}
          variant="subtitle1"
        >
          Enter You Weight
        </Typography>

        <TextField
          style={{ padding: 8 + "px" }}
          id="pounds"
          label={measurment === false ? "Pounds" : "Kilograms"}
          variant="outlined"
        />
        <Divider />
        <br></br>
        <Button className={classes.btn} variant="contained" color="primary">
          Calculate
        </Button>
      </CardContent>
    </Card>
  );
}
