import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewListIcon from "@material-ui/icons/ViewList";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ToggleButtonNotEmpty(props) {
  const [view, setView] = React.useState("cards");

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
      props.changeView(newView);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.toggleContainer}>
      <InputLabel htmlFor="view">View</InputLabel>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleView}
        aria-label="view"
      >
        <ToggleButton value="table" aria-label="table">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="cards" aria-label="cards">
          <ViewComfyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
