import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Typography, Container } from "@mui/material";

const InternalServerErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Erro interno</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="error" fontWeight="bold">
          500
        </Typography>

        <Typography variant="h4" gutterBottom>
          Erro interno no servidor
        </Typography>

        <Typography variant="body1" color="textSecondary" mb={3}>
          Oops! Algo deu errado do nosso lado. Nossa equipe já foi notificada e
          estamos trabalhando para resolver o problema.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => router.push("/")}
        >
          Voltar para a página inicial
        </Button>
      </Container>
    </>
  );
};

export default InternalServerErrorPage;
