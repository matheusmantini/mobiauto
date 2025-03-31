import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_API_URL: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
    },
  },
});
