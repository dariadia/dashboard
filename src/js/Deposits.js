import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

const deposit = { amount: "$3,024.00", date: "15 March, 2019" };

const Deposits = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {deposit.amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {deposit.date}
      </Typography>
    </React.Fragment>
  );
};

export default Deposits;
