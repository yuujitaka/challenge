import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { debounce } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import useSearchMovie from "../../hooks/useSearchMovie";

const TopBar = ({ history }) => {
  const [query, setQuery] = useState("");
  const { data, isFetching } = useSearchMovie(query);

  const handleChange = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  const handleSelect = (event, option) => {
    if (option?.id) history.push(`/movie/${option.id}`);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Challenge</Typography>
        <Autocomplete
          options={data?.results ?? []}
          getOptionLabel={(option) => option.original_title}
          loading={isFetching}
          loadingText="Carregando..."
          onChange={handleSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Combo box"
              variant="outlined"
              onChange={handleChange}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopBar);
