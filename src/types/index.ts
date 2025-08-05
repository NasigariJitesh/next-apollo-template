export interface User {
	id: string;
	name: string;
	email: string;
	avatar?: string;
}

export interface Post {
	id: string;
	title: string;
	content: string;
	author: User;
	createdAt: string;
	updatedAt: string;
}

// Apollo Client types
export interface ApolloError {
	message: string;
	locations?: Array<{
		line: number;
		column: number;
	}>;
	path?: string[];
	extensions?: Record<string, unknown>;
}
