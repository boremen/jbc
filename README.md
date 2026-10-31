# judgebycover

Turn four phone photos of a book into a rotatable 3D model.
Stack: Next.js (App Router) on Vercel, Supabase (Postgres, Auth, Storage, pgmq), three.js / React Three Fiber.

## Commands
- `pnpm dev` — run the app
- `pnpm build` / `pnpm lint` / `pnpm exec tsc --noEmit`
- `pnpm exec supabase start` — local Supabase (needs Docker); migrations live in `supabase/migrations`

Copy `.env.example` to `.env.local` and fill it in.

## Build order
0. Spike: capture engine on a bare page (`lib/capture`)
1. Walking skeleton: Auth, upload flow, publish, asset worker, Book page
2. Collections: shelves, saves, profile
3. Discovery: home, tags, search, comments
4. Later: material tags, edit/re-shoot, reports
