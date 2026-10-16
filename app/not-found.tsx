import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col items-start justify-center pt-[var(--header-h)]">
      <p className="eyebrow text-saffron-ink">404 — page not found</p>
      <h1 className="font-display mt-4 text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.9] text-forest">
        This plate is <span className="font-italic-display text-saffron-ink">empty.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">The page you&apos;re looking for has been cleared from the table. Let&apos;s get you something good.</p>
      <div className="mt-9 flex gap-3">
        <Button href="/">Back Home</Button>
        <Button href="/menu" variant="ghost-dark">
          See the Menu
        </Button>
      </div>
    </section>
  );
}
