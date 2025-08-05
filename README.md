# Next.js Apollo Template

A modern, production-ready TypeScript Next.js application template featuring Apollo Client, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Next.js 15** - App Router with server and client components
- **TypeScript** - Full type safety and excellent developer experience
- **Apollo Client** - Powerful GraphQL client with caching and state management
- **Tailwind CSS v4** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **ESLint** - Code linting and formatting
- **Production Ready** - Optimized build configuration

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd next-apollo-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Update `NEXT_PUBLIC_GRAPHQL_ENDPOINT` with your GraphQL API endpoint.

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # components
│   └── ui/            # shadcn/ui components
│── config/            # App configuration
├── modules/           # Feature modules
│   └── home/          # Home module
│       ├── types/     # Type definitions for the home module
│       ├── example-component.tsx
│       └── queries.ts # GraphQL queries for the home module
├── providers/         # Feature modules
│   └── apollo/ # Apollo Client configuration
├── lib/               # Utility functions
│   ├── utils.ts       # shadcn/ui utilities
│   └── apollo-client.ts # Apollo Client configuration
└── queries/             # Auto-generated GraphQL queries configuration from GraphQL API Schema
```

## 🔧 Configuration

### GraphQL Endpoint

Update your GraphQL endpoint in `.env.local`:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-api.com/graphql
```

### Apollo Client

The Apollo Client is configured in `src/lib/apollo-client.ts` with:

- HTTP link for GraphQL requests
- Authentication header support
- In-memory caching
- Error handling

### shadcn/ui Components

Add new components using the shadcn/ui CLI:

```bash
npx shadcn@latest add [component-name]
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding GraphQL Operations

1. Add your queries/mutations in `src/graphql/queries.ts`
2. Use Apollo Client hooks in your components:

```tsx
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, CREATE_USER } from "@/graphql/queries";

function UserList() {
	const { data, loading, error } = useQuery(GET_USERS);
	const [createUser] = useMutation(CREATE_USER);

	// Your component logic
}
```

### Styling with Tailwind CSS

This template uses Tailwind CSS v4. You can customize the design system by modifying the CSS variables in `src/app/globals.css`.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your project in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This template can be deployed on any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
