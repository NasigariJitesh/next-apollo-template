/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	FieldPolicy,
	FieldReadFunction,
	TypePolicies,
	TypePolicy,
} from "@apollo/client/cache";
export type QueryKeySpecifier = ("_service" | "hello" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_service?: FieldPolicy<any> | FieldReadFunction<any>;
	hello?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ServiceKeySpecifier = ("sdl" | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?:
			| false
			| QueryKeySpecifier
			| (() => undefined | QueryKeySpecifier);
		fields?: QueryFieldPolicy;
	};
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?:
			| false
			| _ServiceKeySpecifier
			| (() => undefined | _ServiceKeySpecifier);
		fields?: _ServiceFieldPolicy;
	};
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
