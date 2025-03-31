import { iResultsPageProps } from "@/types/resultsPageProps";
import { Box, Chip, CircularProgress, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

export default function ResultadoPage({ data, error }: iResultsPageProps) {
  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  if (!data) {
    return <CircularProgress size={50} />;
  }

  console.log(data);

  return (
    <Box
      sx={{
        backgroundColor: "#dcf5f3",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px 0 20px 0",
        minHeight: "auto",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: 22,
          fontWeight: "bolder",
          color: "#585451",
          mb: 2,
          textWrap: "balance",
          textAlign: "center",
        }}
        data-testid={"carInfo"}
      >
        Tabela Fipe: Preço {data.Marca} {data.Modelo} {data.AnoModelo}
      </Typography>

      <Chip
        label={data.Valor.slice(0, -3)}
        sx={{
          backgroundColor: "#00a38d",
          color: "#fff",
          borderColor: "#00a38d",
          "&:hover": {
            backgroundColor: "#0ac9b0",
          },
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 1.5,
          padding: "4px",
          boxSizing: "content-box",
          borderRadius: "25px",
        }}
        data-testid={"carPrice"}
      />

      <Typography
        variant="body1"
        sx={{
          fontSize: 12,
          fontWeight: 300,
          color: "#a2b0b6",
          mt: 2,
        }}
      >
        Este é o preço de compra do veículo
      </Typography>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { marca, modelo, ano } = context.params as {
    marca: string;
    modelo: string;
    ano: string;
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/${marca}/modelos/${modelo}/anos/${ano}`
  );

  if (!response.ok) {
    return {
      props: {
        error: "Dados não encontrados.",
      },
    };
  }

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
