import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cyl9ph7m", // <-- seu ID do projeto
  dataset: "production", // normalmente é "production"
  apiVersion: "2025-11-01", // pode ser a data de hoje
  useCdn: false, // false = sempre dados mais recentes
});
