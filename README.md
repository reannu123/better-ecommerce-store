# Better Ecommerce Store

A customer-facing Next.js storefront for browsing a Better Ecommerce Admin
catalog, managing a local cart, and starting checkout with the admin API.

The store is a companion application, not a standalone backend. It reads
products, categories, and billboards from one store-specific Better Ecommerce
Admin API route.

## Stack

- Next.js 14 App Router, React 18, and TypeScript
- Tailwind CSS and Radix UI primitives
- Zustand cart persistence
- Better Ecommerce Admin API and PayMongo checkout handoff
- Docker Compose for development and production-like local checks

## Prerequisites

- Node.js 20 or another current LTS version
- npm
- A configured Better Ecommerce Admin instance running locally on port `3000`
- Docker with Docker Compose for container workflows

## Configure The Admin API

Start the companion admin project first from
`../better-ecommerce-admin`. It exposes public catalog routes at:

```text
http://localhost:3000/api/YOUR_STORE_ID
```

Copy the environment example:

```bash
cp .env.example .env
```

Set `YOUR_STORE_ID` in all three API variables. Use the store ID visible in
the admin dashboard URL, or inspect the local admin database.

- `NEXT_PUBLIC_API_URL` is the browser-visible URL used by checkout.
- `STORE_API_URL` is the URL used by server rendering during local npm work.
- `DOCKER_STORE_API_URL` is the URL used by server rendering inside Docker.

This distinction lets the browser call `localhost:3000` while the container
uses Docker's host gateway for the same admin API.

These URLs are public catalog endpoints, not credentials. Keep admin secrets,
PayMongo keys, and copied customer data out of this repository.

## Run With npm

Install dependencies:

```bash
npm install
```

Start the storefront:

```bash
npm run dev
```

Open <http://localhost:3001>. The admin remains at
<http://localhost:3000>.

## Docker

Keep Better Ecommerce Admin running on host port `3000`, then start the
storefront development container:

```bash
docker compose up --build
```

Open <http://localhost:3001>. The development Compose workflow bind-mounts the
source code and preserves dependencies and Next build output in named volumes.

Stop it with:

```bash
docker compose down
```

For a production-like local image check without source bind mounts:

```bash
docker compose -f compose.prod.yaml up --build
```

Stop it with:

```bash
docker compose -f compose.prod.yaml down
```

`host.docker.internal` is mapped to the Docker host so both store containers
can call the companion admin app at port `3000` on Linux, Docker Desktop, and
recent Docker Engine versions.

Verified on 2026-06-20: both Compose configurations pass validation, and both
the development and production-like containers render the seeded storefront at
<http://localhost:3001> through the running Better Ecommerce Admin container.

## Checks

```bash
npm run lint
npm run build
docker compose config --quiet
docker compose -f compose.prod.yaml config --quiet
```

## Verification

1. Start Better Ecommerce Admin and confirm its local database has a store,
   category, billboard, and product.
2. Configure this project with that store's API URL.
3. Open the storefront at <http://localhost:3001>.
4. Confirm the featured product and category display.
5. Open the product page, select its variant options, and add it to the cart.
6. Confirm the cart displays the selected product variant and total.
7. Select **Checkout** only when the companion admin uses PayMongo test
   credentials, then confirm it returns a test checkout URL.

## Current Limitations

- The storefront cannot operate without its compatible Better Ecommerce Admin
  API and store-specific data.
- An empty admin catalog shows no featured products or billboard; create or
  seed catalog data in the admin first.
- Checkout is delegated to Better Ecommerce Admin and requires its PayMongo
  test configuration.
- The Docker setup is for local development and production-like image checks,
  not deployment.

## Useful Files

- `actions/` - server-side catalog API requests
- `app/(routes)/` - storefront, product, category, and cart routes
- `hooks/use-cart.ts` - persisted local cart state
- `.env.example` - storefront/admin API configuration template
- `docker-compose.yml` and `compose.prod.yaml` - local Docker workflows
