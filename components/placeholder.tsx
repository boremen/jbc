import { Suspense } from "react";

type Props = {
  title: string;
  params?: Promise<Record<string, string | string[]>>;
};

async function Params({ params }: { params: NonNullable<Props["params"]> }) {
  return <pre className="mt-4 text-sm">{JSON.stringify(await params, null, 2)}</pre>;
}

export function Placeholder({ title, params }: Props) {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {params && (
        <Suspense fallback={null}>
          <Params params={params} />
        </Suspense>
      )}
    </main>
  );
}
