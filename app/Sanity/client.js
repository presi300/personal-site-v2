import { createClient } from "next-sanity";

const projectId = process.env.NEXT_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_SANITY_DATASET;
const token = process.env.NEXT_SANITY_TOKEN;

export const SanityClient = createClient({
  projectId,
  token,
  apiVersion: "2023-01-20",
  dataset,
  useCdn: true,
});
