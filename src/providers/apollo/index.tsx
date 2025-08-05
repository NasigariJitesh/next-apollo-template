import {
	ApolloClient,
	ApolloProvider,
	NormalizedCacheObject,
} from "@apollo/client";

export function Provider({
	children,
	client,
}: {
	children: React.ReactNode;
	client: ApolloClient<NormalizedCacheObject>;
}) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
