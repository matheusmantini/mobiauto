export interface iCustomAutocompleteProps<T> {
  options: T[];
  loading?: boolean;
  label: string;
  value: T | null;
  onChange: (event: unknown, value: T | null) => void;
  disabled?: boolean;
}
