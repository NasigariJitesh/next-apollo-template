"use client";
import { useQuery } from "@apollo/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GET_USERS } from "@/modules/home/queries";
import { CheckHelloQuery } from "@/queries/__generated__/graphql";

interface ExampleComponentProps {
	className?: string;
}

export default function ExampleComponent({ className }: ExampleComponentProps) {
	// Example query usage
	const {
		data = { hello: "Failed " },
		loading: usersLoading,
		error: usersError,
	} = useQuery<CheckHelloQuery>(GET_USERS);

	if (usersLoading) {
		return (
			<Card className={className}>
				<CardHeader>
					<CardTitle>Loading...</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-muted-foreground'>
						Fetching data from GraphQL API...
					</p>
				</CardContent>
			</Card>
		);
	}

	if (usersError) {
		return (
			<Card className={className}>
				<CardHeader>
					<CardTitle>GraphQL Example</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<p className='text-destructive text-sm'>
						Error: {usersError.message}
					</p>
					<p className='text-muted-foreground text-sm'>
						Make sure to configure your GraphQL endpoint in the environment
						variables.
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>GraphQL Example</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div>
					<h3 className='font-semibold mb-2'>Response</h3>
					<p>{data.hello}</p>
				</div>
			</CardContent>
		</Card>
	);
}
