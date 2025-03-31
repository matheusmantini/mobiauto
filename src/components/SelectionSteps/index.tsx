import { iAutocompleteOptions, SelectionStepsProps } from "@/types";
import { Stack } from "@mui/material";
import { CustomAutocomplete } from "../CustomAutocomplete";

export const SelectionSteps = ({
  loading,
  brand,
  model,
  year,
  selectedBrand,
  selectedModel,
  selectedYear,
  onBrandChange,
  onModelChange,
  onYearChange,
}: SelectionStepsProps) => (
  <Stack gap={2} p={2} sx={{ padding: "16px 40px" }}>
    <CustomAutocomplete<iAutocompleteOptions>
      options={brand}
      loading={loading.brand}
      label="Marca"
      value={brand.find((m) => m.codigo === selectedBrand) || null}
      onChange={onBrandChange}
    />

    <CustomAutocomplete<iAutocompleteOptions>
      options={model}
      loading={loading.model}
      label="Modelo"
      value={model.find((m) => m.codigo === selectedModel) || null}
      onChange={onModelChange}
      disabled={!selectedBrand}
    />

    {selectedModel && (
      <CustomAutocomplete<iAutocompleteOptions>
        options={year}
        loading={loading.year}
        label="Ano"
        value={year.find((a) => a.codigo === selectedYear) || null}
        onChange={onYearChange}
      />
    )}
  </Stack>
);
