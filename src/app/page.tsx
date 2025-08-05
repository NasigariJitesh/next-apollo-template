"use client";

import ExampleComponent from "@/components/example-component";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
			<div className='container mx-auto px-4 py-16'>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
						Next.js Apollo Template
					</h1>
					<p className='text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
						A modern TypeScript Next.js application with Apollo Client, Tailwind
						CSS, and shadcn/ui components
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>⚡</span>
								Next.js 15
							</CardTitle>
							<CardDescription>
								App Router with server and client components
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400'>
								Built with the latest Next.js features including App Router,
								server components, and optimized performance.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>🔗</span>
								Apollo Client
							</CardTitle>
							<CardDescription>
								GraphQL client with caching and state management
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400'>
								Fully configured Apollo Client for GraphQL data fetching with
								caching, error handling, and TypeScript support.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>🎨</span>
								shadcn/ui
							</CardTitle>
							<CardDescription>
								Beautiful, accessible components
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400 mb-4'>
								Pre-built components using Radix UI and Tailwind CSS for rapid
								UI development.
							</p>
							<Button className='w-full'>Example Button</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>🎯</span>
								TypeScript
							</CardTitle>
							<CardDescription>
								Full type safety and developer experience
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400'>
								Complete TypeScript setup with strict configuration for better
								code quality and developer experience.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>🌊</span>
								Tailwind CSS
							</CardTitle>
							<CardDescription>Utility-first CSS framework</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400'>
								Configured with Tailwind CSS v4 for rapid styling and responsive
								design with utility classes.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<span className='text-2xl'>🚀</span>
								Ready to Ship
							</CardTitle>
							<CardDescription>Production-ready configuration</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-sm text-slate-600 dark:text-slate-400'>
								ESLint, TypeScript, and optimized build configuration for
								production deployment.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className='text-center mt-16'>
					<h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
						Get Started
					</h2>
					<p className='text-slate-600 dark:text-slate-400 mb-8'>
						Edit{" "}
						<code className='bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm'>
							src/app/page.tsx
						</code>{" "}
						to start building your application
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button size='lg'>Start Building</Button>
						<Button variant='outline' size='lg'>
							View Documentation
						</Button>
					</div>
				</div>

				<div className='text-center mt-16'>
					<ExampleComponent />
				</div>
			</div>
		</div>
	);
}
