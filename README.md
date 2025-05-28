# Mathly

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Overview

Mathly is a modern web application built with Angular and NestJS, leveraging the Nx monorepo structure. This repository contains the new implementation of Mathly with a focus on scalability, maintainability, and developer experience.

### Key Technologies

- **Frontend**: Angular with modern patterns
- **Backend**: NestJS with Prisma ORM
- **Authentication**: Firebase Authentication
- **Database**: PostgreSQL (via Neon)
- **Monorepo**: Nx workspace for efficient code organization and sharing

## Project Structure

```
├── apps/
│   ├── api/               # NestJS backend application
│   ├── mathly/            # Angular frontend application
│   └── mathly-e2e/        # End-to-end tests
└── libs/
    ├── api/               # Backend libraries
    │   ├── core/          # Core backend modules (auth, etc.)
    │   └── features/      # Feature modules for the API
    ├── client/            # Frontend libraries
    │   ├── features/      # Feature modules for the frontend
    │   └── ui/            # Shared UI components
    └── shared/            # Shared libraries
        └── types/         # TypeScript types shared across frontend and backend
```


## Development

### Prerequisites

- Node.js (v18+)
- pnpm
- PostgreSQL database (or use the provided Neon database)

### Environment Setup

Create a `.env` file in the `apps/api` directory with the following variables:

```
# Database connection
DATABASE_URL="your-postgresql-connection-string"

# Server configuration
PORT=3000
NODE_ENV=development

# Firebase Configuration
FIREBASE_PROJECT_ID="your-firebase-project-id"
FIREBASE_CLIENT_EMAIL="your-firebase-client-email"
FIREBASE_PRIVATE_KEY="your-firebase-private-key"
```

### Running the Applications

#### Start the API (NestJS Backend)

```sh
npx nx serve api
```

The API will be available at http://localhost:3000/api with Swagger documentation at http://localhost:3000/api/docs

#### Start the Frontend (Angular)

```sh
npx nx serve mathly
```

The frontend will be available at http://localhost:4200

### Building for Production

```sh
# Build the API
npx nx build api

# Build the frontend
npx nx build mathly
```

### Database Management

```sh
# Generate Prisma client after schema changes
cd apps/api && npx prisma generate

# Create migrations
cd apps/api && npx prisma migrate dev --name your-migration-name

# Apply migrations
cd apps/api && npx prisma migrate deploy
```

## Project Commands

To see all available targets for a project, run:

```sh
npx nx show project [project-name]
```

To visualize the project dependencies:

```sh
npx nx graph
```

## Adding New Features

This project uses Nx to manage the monorepo structure. Here are some common commands for adding new features:

### Backend (NestJS)

```sh
# Create a new API feature library
npx nx g @nx/nest:lib feature-name --directory=libs/api/features/feature-name --tags=scope:api,type:feature

# Generate a new resource (controller, service, module with CRUD)
npx nx g @nestjs/schematics:resource --name=resource-name --source-root=libs/api/features/feature-name/src --no-spec
```

### Frontend (Angular)

```sh
# Create a new frontend feature library
npx nx g @nx/angular:lib feature-name --directory=libs/client/features/feature-name --tags=scope:client,type:feature

# Generate a new component
npx nx g @nx/angular:component component-name --project=client-features-feature-name
```

### Shared Libraries

```sh
# Create a new shared TypeScript library
npx nx g @nx/js:lib lib-name --directory=libs/shared/lib-name --tags=scope:shared,type:util
```

### Useful Nx Commands

```sh
# List available plugins
npx nx list

# View capabilities of a plugin
npx nx list @nx/nest

# Run a specific target for all projects
npx nx run-many --target=lint --all

# Run a specific target for projects affected by changes
npx nx affected --target=test
```

For more information, check out the [Nx documentation](https://nx.dev/) or install the [Nx Console](https://nx.dev/getting-started/editor-setup) extension for your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
