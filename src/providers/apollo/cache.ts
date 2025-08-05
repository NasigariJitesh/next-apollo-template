import { InMemoryCache } from "@apollo/client";
import { TypedTypePolicies } from "@/queries/type-policies";

const mergeCacheStrategy = (
	existing: { __ref: string }[] = [],
	incoming: { __ref: string }[]
) => {
	if (!incoming || incoming.length === 0) return existing;

	const filtered = incoming.filter(
		(income: { __ref: string }) =>
			!existing.some((exist: { __ref: string }) => exist.__ref === income.__ref)
	);

	return [...existing, ...filtered];
};

const typePolicies: TypedTypePolicies = {
	Query: {
		fields: {
			// Example of how to merge arrays in the cache
			// users: {
			// 	keyArgs: ["where", "sort"],
			// 	merge: mergeCacheStrategy,
			// },
		},
	},
};

export const cache = new InMemoryCache({
	typePolicies,
});
