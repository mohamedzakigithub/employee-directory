import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  return props.match.map((employee) => {
    return (
      <div key={employee.id}>
        <Card
          className={classes.root}
          variant="outlined"
          style={{
            background: "linear-gradient(to right, #83a4d4, #b6fbff)",
          }}
        >
          <CardContent>
            <Typography gutterBottom>Emloyee ID: {employee.id}</Typography>
            <Typography variant="h5" component="h2">
              {employee.name}
            </Typography>
            <br />
            <Typography
              component="p"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon /> {employee.email}
            </Typography>
            <Typography
              component="p"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon /> {employee.phone}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <br />
      </div>
    );
  });
}
