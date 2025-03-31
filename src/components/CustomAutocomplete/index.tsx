import { iCustomAutocompleteProps } from "@/types/customAutocompleteProps";
import { highlightText } from "@/utils/highlightText";
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiFilledInput-root": {
    backgroundColor: "white",
    border: "1px solid #c4c4c4",
    borderBottom: "none",
    borderRadius: "4px",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "#808080",
      backgroundColor: "#fafafa",
    },
    "&.Mui-focused": {
      borderColor: "#606060",
      backgroundColor: "white",
    },
    "&.Mui-disabled": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
});

export const CustomAutocomplete = <T extends { nome: string }>({
  options,
  loading,
  label,
  value,
  onChange,
  disabled,
}: iCustomAutocompleteProps<T>) => (
  <Autocomplete
    options={options}
    disabled={disabled}
    loading={loading}
    value={value}
    onChange={onChange}
    data-testid={label}
    noOptionsText="Nenhuma opção disponível"
    getOptionLabel={(option) => option.nome}
    sx={{
      backgroundColor: "white",
      borderRadius: 1,
    }}
    renderInput={(params) => (
      <StyledTextField
        {...params}
        label={label}
        variant="filled"
        InputProps={{
          ...params.InputProps,
          endAdornment: <>{params.InputProps.endAdornment}</>,
        }}
      />
    )}
    renderOption={(props, option, { inputValue }) => {
      const { key, ...restProps } = props;
      return (
        <li key={key} {...restProps}>
          {highlightText(option.nome, inputValue)}
        </li>
      );
    }}
  />
);
