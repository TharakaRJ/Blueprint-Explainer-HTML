import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

const typeStyles = {
  analytic: "border-blue-500/30 bg-blue-950/20 text-blue-100 hover:border-blue-400/80 hover:bg-blue-950/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  dynamic: "border-purple-500/30 bg-purple-950/20 text-purple-100 hover:border-purple-400/80 hover:bg-purple-950/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  profile: "border-teal-500/30 bg-teal-950/20 text-teal-100 hover:border-teal-400/80 hover:bg-teal-950/40 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]",
  engine: "border-emerald-500/30 bg-emerald-950/20 text-emerald-100 hover:border-emerald-400/80 hover:bg-emerald-950/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
  regulation: "border-emerald-700/40 bg-emerald-950/10 text-emerald-50 hover:border-emerald-500/80 hover:bg-emerald-950/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]",
  station: "border-sky-500/30 bg-sky-950/20 text-sky-100 hover:border-sky-400/80 hover:bg-sky-950/40 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]",
  simulation: "border-cyan-500/30 bg-cyan-950/20 text-cyan-100 hover:border-cyan-400/80 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.28)]",
  node: "border-cyan-500/30 bg-cyan-950/20 text-cyan-100 hover:border-cyan-400/80 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.28)]",
  safety: "border-amber-500/35 bg-amber-950/15 text-amber-100 hover:border-amber-400/80 hover:bg-amber-950/30 hover:shadow-[0_0_15px_rgba(245,158,11,0.24)]",
  validity: "border-yellow-500/35 bg-yellow-950/15 text-yellow-100 hover:border-yellow-400/80 hover:bg-yellow-950/30 hover:shadow-[0_0_15px_rgba(234,179,8,0.22)]",
  inquiry: "border-violet-500/35 bg-violet-950/15 text-violet-100 hover:border-violet-400/80 hover:bg-violet-950/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.24)]",
  momentum: "border-fuchsia-500/30 bg-fuchsia-950/15 text-fuchsia-100 hover:border-fuchsia-400/80 hover:bg-fuchsia-950/30 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]",
  communication: "border-cyan-400/35 bg-cyan-950/15 text-cyan-100 hover:border-cyan-300/80 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
};

const badgeStyles = {
  analytic: "text-blue-300 border-blue-500/50",
  dynamic: "text-purple-300 border-purple-500/50",
  profile: "text-teal-300 border-teal-500/50",
  engine: "text-emerald-300 border-emerald-500/50",
  regulation: "text-emerald-200 border-emerald-600/50",
  station: "text-sky-300 border-sky-500/50",
  simulation: "text-cyan-300 border-cyan-500/50",
  node: "text-cyan-300 border-cyan-500/50",
  safety: "text-amber-300 border-amber-500/50",
  validity: "text-yellow-300 border-yellow-500/50",
  inquiry: "text-violet-300 border-violet-500/50",
  momentum: "text-fuchsia-300 border-fuchsia-500/50",
  communication: "text-cyan-200 border-cyan-400/50",
};

export function ArchitectureCard({ 
  id, 
  title, 
  technicalLabel,
  subtitle, 
  badge, 
  chips,
  type, 
  onMouseEnter, 
  onMouseLeave,
  onToggleSelection,
  onInfoClick,
  hasExplanation,
  isActive,
  isFaded
}) {
  return (
    <div
      id={id}
      data-node-id={id}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => onToggleSelection?.(id)}
      className={cn(
        "relative flex flex-col justify-center rounded-xl border p-4 text-left transition-all duration-300 backdrop-blur-sm z-10 w-full min-h-[90px] cursor-pointer",
        typeStyles[type],
        isActive ? "ring-1 ring-white/20 scale-[1.02]" : "",
        isFaded ? "opacity-40 grayscale-[50%]" : "opacity-100"
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="min-w-0 pr-3">
          <h3 className="text-sm font-semibold leading-tight">{title}</h3>
          {technicalLabel && (
            <span className={cn(
              "mt-2 inline-flex max-w-full rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider",
              badgeStyles[type]
            )}>
              {technicalLabel}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0 relative z-20">
          {badge && (
            <span className={cn(
              "text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border uppercase bg-black/40",
              badgeStyles[type]
            )}>
              {badge}
            </span>
          )}
          {hasExplanation ? (
            <button
              type="button"
              aria-label={`Explain ${title}`}
              onClick={(event) => {
                event.stopPropagation();
                onInfoClick?.(id, event);
              }}
              className="rounded-full text-current opacity-50 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300/70"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Info className="w-3.5 h-3.5 opacity-30" />
          )}
        </div>
      </div>
      <p className="text-xs opacity-70 leading-relaxed pr-2">{subtitle}</p>
      {chips?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className={cn(
                "rounded-full border bg-black/25 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider",
                badgeStyles[type]
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
