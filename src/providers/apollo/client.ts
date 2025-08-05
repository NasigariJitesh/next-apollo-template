import { ApolloClient, concat, HttpLink } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { env } from "@/config/env";

import { cache } from "./cache";

// Configure HTTP link with timeout
const httpLink = new HttpLink({
	uri: env.GRAPHQL_URI,
	fetchOptions: {
		timeout: 15000, // 15 second timeout
	},
});

const retry = new RetryLink({
	attempts: {
		max: 3,
	},
	delay: {
		initial: 1000 * 2,
		max: Number.POSITIVE_INFINITY,
		jitter: true,
	},
});

const link = concat(retry, httpLink);

export const client = new ApolloClient({
	cache,
	link,
});
