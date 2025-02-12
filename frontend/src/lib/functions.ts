import { GraphQLResponse } from "@/types/index";

/**
 * Function to execute a GraphQL query.
 */
export async function fetchGraphQL<T = unknown>(
  query: string,
  variables?: { [key: string]: unknown },
  preview = false,
  revalidate = 5
): Promise<GraphQLResponse<T>> {
  try {
    // Validate the WordPress GraphQL URL.
    const graphqlUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;
    if (!graphqlUrl) {
      throw new Error("Missing WordPress GraphQL URL environment variable!");
    }

    // Get the refresh token.
    const refreshToken = process.env.NEXTJS_AUTH_REFRESH_TOKEN;

    // Prepare headers.
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };

    // If preview mode is enabled and we have a token.
    if (preview && refreshToken) {
      // Add refresh token to fetch headers.
      headers["Authorization"] = `Bearer ${refreshToken}`;
    }

    // Fetch data from external API.
    const response = await fetch(graphqlUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: {
        tags: ["graphql"],
        revalidate,
      },
    });

    // If the response status is not 200, throw an error.
    if (!response.ok) {
      console.error("Response Status:", response.status);
      throw new Error(response.statusText);
    }

    // Read the response as JSON.
    const data: GraphQLResponse<T> = await response.json();

    // Throw an error if there was a GraphQL error.
    if (data.errors && data.errors.length > 0) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error(data.errors.map((error) => error.message).join(", "));
    }

    // Finally, return the data.
    return data;
  } catch (error) {
    console.error("Error in fetchGraphQL:", error);
    throw error;
  }
}
