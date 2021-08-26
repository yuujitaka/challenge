import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const SearchInput = styled(TextField)`
  width: 250px;
  .MuiInputBase-input {
    color: white;
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid white;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid white;
  }
  .MuiIconButton-root {
    color: white;
  }
`;

export default SearchInput;
