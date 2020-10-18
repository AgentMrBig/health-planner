import React from "react";
import {
  FormControlLabel,
  Switch,
  Divider,
  CardHeader,
  Typography,
  TextField,
  Card,
  CardContent,
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
});

export default function BmiCalc() {
  const [measurment, setMeasurment] = React.useState({
    standard: true,
  });

  const handleChange = (event) => {
    setMeasurment({ ...measurment, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader className={classes.header} title="Body Mass Index Calculator">
        <Typography className={classes.title} variant="h6">
          Body Mass Index Calculator
        </Typography>
      </CardHeader>
      <CardContent>
        <FormControlLabel
          control={
            <Switch
              checked={measurment.standard}
              onChange={handleChange}
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
          label="Feet"
          variant="outlined"
        />
        <TextField
          style={{ padding: 8 + "px" }}
          id="inches"
          label="Inches"
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
          label="Pounds"
          variant="outlined"
        />
        <Divider />
      </CardContent>
    </Card>
  );
}
