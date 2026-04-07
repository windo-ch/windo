export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-2">
      <div className="w-6 h-[1.5px] bg-glow-deep mb-4" />
      <p className="text-xs uppercase tracking-widest text-glow-deep/60">{text}</p>
    </div>
  );
}
