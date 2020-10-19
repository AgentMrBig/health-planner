import React, { useState, useEffect } from "react";

import {
  FormControlLabel,
  Switch,
  Divider,
  CardHeader,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Grow,
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
  btn: {
    marginLeft: "37%",
  },
});

export default function BmiCalc() {
  const [form, setState] = useState({
    ft: "",
    in: "",
    cm: "",
    lbs: "",
    kg: "",
    bmi: "",
  });

  const [measurment, setMeasurment] = React.useState(true);

  const handleToggle = () => {
    setMeasurment((prev) => !prev);
  };

  const handleChange = (e) => {
    e.persist();
    setState(
      (form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }),
      console.log(form)
    );
  };

  // convert inches to cm
  const inchesToCm = (inches) => {
    var mm = inches * 25.4;
    var cm = mm / 10;
    return cm.toFixed(2);
  };

  // convert lbs to kg
  const lbsToKg = (lbs) => {
    var kg = lbs / 2.2046;
    return kg.toFixed(2);
  };

  const CalcBMI = () => {
    var weight;
    var height;
    var heightSquared;
    var result;

    if (measurment === true) {
      //heightSquared = Math.pow(height, 2);
      result = weight / Math.pow(height, 2);
    } else if (measurment === false) {
      var feetToIn = parseFloat(form.ft * 12);
      height = feetToIn + parseInt(form.in);
      weight = lbsToKg(form.lbs);
      console.log("height test " + height);
      height = inchesToCm(height);

      console.log("height " + height);

      heightSquared = Math.pow(height, 2);
      result = weight / heightSquared;
    }
    console.log(form);

    console.log("weight", weight, "height", height);

    setState({
      bmi: result.toString(),
      cm: height * 0.0393701,
      kg: weight,
    });

    console.log(form);

    console.log("result ", result);
    console.log("lbs to kg ", lbsToKg(weight));
    return result;
  };

  const handleCalc = (event) => {
    event.preventDefault();
    //var result = CalcBMI(form.weight, (form.heightMain +'.'+ form.heightDec))
    CalcBMI();
    console.log(form.bmi);
  };

  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader className={classes.header} title="Body Mass Index Calculator">
        <Typography className={classes.title} variant="h6">
          BMI Calculator
        </Typography>
      </CardHeader>
      <CardContent direction="column" justify="center" alightitems="center">
        <form name="bmi" onSubmit={handleCalc}>
          <FormControlLabel
            control={
              <Switch
                checked={measurment.standard}
                onChange={handleToggle}
                name="standard"
                color="primary"
              />
            }
            label="Switch Measurment System"
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
            label={measurment === false ? "Feet" : "Centimeters"}
            variant="outlined"
            onChange={handleChange}
            name={measurment === false ? "ft" : "cm"}
          />
          <Grow in={!measurment}>
            <TextField
              style={{ padding: 8 + "px" }}
              id="inches"
              label="Inches"
              variant="outlined"
              onChange={handleChange}
              name="in"
            />
          </Grow>

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
            name={measurment === false ? "lbs" : "kg"}
            onChange={handleChange}
          />
          <Divider />
          <br></br>
          <Button
            type="submit"
            form="bmi"
            onClick={handleCalc}
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
