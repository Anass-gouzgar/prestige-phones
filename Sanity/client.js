import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}

// Fetching data
export async function FetchData(query) {
  return await client.fetch(query);
}
