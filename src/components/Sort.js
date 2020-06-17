import React from "react";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";

export default function Sort(props) {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="sort">Sort by:</InputLabel>
        <NativeSelect
          onChange={props.handleSort}
          inputProps={{
            name: "sort",
            id: "sort",
          }}
        >
          <option value={"id"}>Id</option>
          <option value={"name"}>Name</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
