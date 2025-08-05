import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost:4000/graphql",
	generates: {
		"src/queries/__generated__/": {
			preset: "client",
			config: {
				enumsAsTypes: true,
				enumsAsString: false,
			},
			documents: ["**/*.ts"],
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
			},
		},
		"src/queries/type-policies.ts": {
			plugins: ["typescript-apollo-client-helpers"],
		},
	},
	ignoreNoDocuments: true,
};

export default config;
