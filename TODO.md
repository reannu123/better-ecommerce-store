# Better Ecommerce Store TODO

Last updated: 2026-06-20

## Project

- Name: Better Ecommerce Store
- Path: `/home/reannu123/Projects/portfolio/better-ecommerce-store`
- Status: complete
- Stage: revival
- Branch: `main`
- Portfolio role: customer-facing storefront paired with Better Ecommerce Admin

## Current Milestone

Revive the existing Next.js storefront as a reproducible companion to Better
Ecommerce Admin: document the store-specific API configuration, verify product
browsing and checkout handoff when the admin backend is available, and provide
development and production-like Docker workflows.

This milestone does not include redesigning the storefront, changing payment
providers, adding new commerce features, or deploying either project.

## Definition Of Done

- [x] Another developer can install dependencies, configure the admin API URL,
      and run the storefront.
- [x] The main storefront workflow has been verified against the compatible
      Better Ecommerce Admin API, or its external dependency is documented.
- [x] The README explains purpose, stack, setup, storefront/admin pairing,
      verification, limitations, and safe configuration.
- [x] Docker development and production-like workflows are verified and
      documented.
- [x] The revived state is merged or pushed through a clear GitHub trail.

## Now

- No active work. The revival milestone is complete.

## Next

- Choose and inspect the next queued revival before activating it.

## Later

- [ ] Review and upgrade the 22 dependency advisories reported by `npm install`
      before a public deployment; do not use broad forced upgrades during this
      revival without a compatibility review.
- [ ] Add screenshots or a short storefront walkthrough for portfolio use.
- [ ] Revisit storefront visual polish only after the revival milestone is
      complete.

## Blocked

- No confirmed blocker.

## Done

- [x] Cloned repository locally on 2026-06-20 from
      `https://github.com/reannu123/better-ecommerce-store`.
- [x] Created `revive/project-setup` on 2026-06-20.
- [x] Installed dependencies with `npm install` on 2026-06-20.
- [x] Verified on 2026-06-20: `npm run lint` and `npm run build` pass.
- [x] Connected the storefront to the seeded `Superstore` Better Ecommerce
      Admin API with local npm and Docker-specific URLs in ignored `.env`.
- [x] Replaced the generic Docker setup on 2026-06-20 with a multi-stage
      Next.js Dockerfile plus development and production-like Compose files.
- [x] Verified on 2026-06-20: both Compose configurations pass, both Docker
      modes render the seeded `Classic Hoodie` catalog at
      `http://localhost:3001`, and product variant selection, cart add, and
      cart totals work in the browser.
- [x] Verified on 2026-06-20: the admin checkout endpoint responds to the
      storefront origin's CORS preflight with the required POST headers.
- [x] Verified on 2026-06-20: the first browser checkout request reached the
      admin API after the Docker networking fix. PayMongo returned `401
      Unauthorized`, confirming that the local admin test key must be updated.
- [x] Added a safe checkout failure path on 2026-06-20: missing credentials
      now return `503` without creating an order, and rejected PayMongo calls
      return a concise error without logging the raw provider response.
- [x] Verified by user-approved test on 2026-06-20: the storefront created a
      PayMongo test checkout session for the seeded `Classic Hoodie` and
      reached the hosted PayMongo checkout page. No payment was completed.
- [x] Merged GitHub PR #3 on 2026-06-20:
      `https://github.com/reannu123/better-ecommerce-store/pull/3`.
