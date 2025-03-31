import { iAutocompleteOptions } from "./index";

export interface SelectionStepsProps {
  loading: { brand: boolean; model: boolean; year: boolean };
  brand: iAutocompleteOptions[];
  model: iAutocompleteOptions[];
  year: iAutocompleteOptions[];
  selectedBrand: string | null;
  selectedModel: string | null;
  selectedYear: string | null;
  onBrandChange: (event: unknown, value: iAutocompleteOptions | null) => void;
  onModelChange: (event: unknown, value: iAutocompleteOptions | null) => void;
  onYearChange: (event: unknown, value: iAutocompleteOptions | null) => void;
}
