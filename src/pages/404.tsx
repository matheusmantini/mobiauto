import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Typography, Container } from "@mui/material";

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Página não encontrada</title>
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
        <Typography variant="h1" color="textPrimary" fontWeight="bold">
          404
        </Typography>

        <Typography variant="h4" gutterBottom>
          Página não encontrada
        </Typography>

        <Typography variant="body1" color="textSecondary" mb={3}>
          A página que você está procurando pode ter sido removida ou está
          temporariamente indisponível.
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

export default NotFoundPage;
