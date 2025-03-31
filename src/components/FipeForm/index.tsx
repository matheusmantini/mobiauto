import { Card } from "@mui/material";
import { SelectionSteps } from "../SelectionSteps/index";
import { useFipeData } from "../../hooks/useFipeData";
import { SubmitButton } from "../SubmitButton/index";

export const FipeForm = () => {
  const {
    brand,
    model,
    year,
    loading,
    selectedBrand,
    selectedModel,
    selectedYear,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
    handleSubmit,
  } = useFipeData();

  return (
    <Card
      sx={{
        width: {
          xs: "90%",
          sm: 480,
        },
        maxWidth: 480,
        mx: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "16px",
        paddingTop: "14px",
        marginTop: "20px",
        boxSizing: "border-box",
      }}
    >
      <SelectionSteps
        loading={loading}
        brand={brand}
        model={model}
        year={year.filter((a) => /^\d{4}$/.test(a.nome.split(" ")[0]))}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedYear={selectedYear}
        onBrandChange={handleBrandChange}
        onModelChange={handleModelChange}
        onYearChange={handleYearChange}
      />
      <SubmitButton disabled={!selectedYear} onClick={handleSubmit} />
    </Card>
  );
};
