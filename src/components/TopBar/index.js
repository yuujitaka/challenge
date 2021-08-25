import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { debounce } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";

import useSearchMovie from "../../hooks/useSearchMovie";
import SearchInput from "./styles";

const TopBar = ({ history }) => {
  const [query, setQuery] = useState("");
  const { data, isFetching } = useSearchMovie(query);

  const handleChange = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  const handleSelect = (event, option) => {
    if (option?.id) {
      history.push(`/movie/${option.id}`);
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Challenge
          </Typography>
        </Box>
        <Autocomplete
          options={data?.results ?? []}
          getOptionLabel={(option) => option.original_title}
          renderOption={(option) => (
            <>
              <TheatersRoundedIcon />
              <Box ml={1}>{option.original_title}</Box>
            </>
          )}
          loading={isFetching}
          loadingText="Carregando..."
          onChange={handleSelect}
          noOptionsText={
            data?.results ? "Movie not found" : "Search a movie..."
          }
          renderInput={(params) => {
            <SearchInput
              {...params}
              color="secondary"
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon position="start" color="secondary" />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />;
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopBar);
