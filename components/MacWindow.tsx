interface MacWindowProps {
  children: React.ReactNode;
  className?: string;
}

export default function MacWindow({ children, className = "" }: MacWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.06] bg-bg-secondary shadow-2xl shadow-black/50 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.04] bg-bg-tertiary px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-text-muted">Grainulator</span>
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
