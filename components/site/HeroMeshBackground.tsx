export function HeroMeshBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden">
      <div className="hero-mesh absolute inset-0 opacity-[0.55]" />
      <div className="absolute inset-0 bg-background [mask-image:linear-gradient(to_bottom,transparent,white)]" />
    </div>
  );
}
