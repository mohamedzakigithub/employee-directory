import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Search(props) {
  return (
    <TextField
      onChange={props.handleSearch}
      id="standard-search"
      label="Search for an employee"
      type="search"
    />
  );
}
