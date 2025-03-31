import { Box, Typography } from "@mui/material";
import { FipeForm } from "@/components/FipeForm";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tabela Fipe - Consulta de Preços</title>
        <meta
          name="description"
          content="Consulte o valor de veículos de forma gratuita usando a Tabela Fipe oficial."
        />
      </Head>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#f9f6fc",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Tabela Fipe
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            textWrap: "balance",
          }}
        >
          Consulte o valor de um veículo de forma gratuita
        </Typography>

        <FipeForm />
      </Box>
    </>
  );
}
