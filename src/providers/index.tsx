"use client";

import React from "react";
import { Provider as ApolloProvider } from "./apollo";
import { client } from "./apollo/client";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppProvider;
