"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apollo-client";

interface ApolloWrapperProps {
	children: React.ReactNode;
}

export default function ApolloWrapper({ children }: ApolloWrapperProps) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
