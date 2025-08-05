# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a TypeScript Next.js application template that includes:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful, accessible components
- **Apollo Client** for GraphQL data fetching
- **ESLint** for code linting

## Architecture Guidelines

- Use the Next.js App Router for all routing
- Implement server and client components appropriately
- Use TypeScript interfaces for all data structures
- Follow shadcn/ui component patterns
- Use Apollo Client hooks for GraphQL operations
- Implement responsive design with Tailwind CSS

## Code Style

- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Use explicit return types for functions
- Follow Next.js file-based routing conventions
- Use proper error boundaries and loading states
- Implement proper SEO with Next.js metadata API

## GraphQL Patterns

- Use Apollo Client hooks (`useQuery`, `useMutation`, `useSubscription`)
- Implement proper error handling and loading states
- Use GraphQL fragments for reusable query parts
- Follow GraphQL best practices for schema design
- Cache data appropriately with Apollo Client

## Component Structure

- Use shadcn/ui components as building blocks
- Create custom components in `src/components/`
- Use proper TypeScript props interfaces
- Implement accessibility features
- Follow responsive design principles

## File Organization

- Pages in `src/app/` (App Router)
- Components in `src/components/`
- Utilities in `src/lib/`
- GraphQL operations in `src/graphql/`
- Types in `src/types/`
