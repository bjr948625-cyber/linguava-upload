export function SectionFallback() {
  return (
    <div aria-hidden="true" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl animate-pulse text-center">
          <div className="mx-auto h-4 w-24 rounded-full bg-muted" />
          <div className="mx-auto mt-4 h-8 w-3/4 rounded-lg bg-muted" />
          <div className="mx-auto mt-4 h-4 w-2/3 rounded-lg bg-muted" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 animate-pulse rounded-2xl border border-border bg-muted/50" />
          ))}
        </div>
      </div>
    </div>
  );
}
