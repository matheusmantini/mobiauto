import { SubmitButtonProps } from "@/types";
import { Button } from "@mui/material";
import React from "react";

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
}) => (
  <Button
    variant="contained"
    onClick={onClick}
    disabled={disabled}
    data-testid={"submitButton"}
    sx={{
      backgroundColor: "#5c00bf",
      textTransform: "none",
      padding: "10px 30px",
      fontSize: "1rem",
      fontWeight: 500,
      "&:hover": {
        backgroundColor: "#8329e3",
      },
      "&.Mui-disabled": {
        backgroundColor: "#e0e0e0",
        color: "#9e9e9e",
      },
      transition: "background-color 0.3s ease",
      margin: "14px auto",
    }}
  >
    Consultar preço
  </Button>
);
