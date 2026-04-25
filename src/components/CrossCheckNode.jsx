import React from "react";
import { Combine, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function CrossCheckNode({ 
  id, 
  title, 
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
        "relative flex flex-col items-center justify-center gap-1 transition-all duration-300 z-10 cursor-pointer",
        isActive ? "scale-110" : "",
        isFaded ? "opacity-40 grayscale-[50%]" : "opacity-100"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full border border-teal-500/50 bg-teal-950/40 flex items-center justify-center shadow-[0_0_10px_rgba(20,184,166,0.2)] transition-all duration-300",
        isActive ? "border-teal-400 bg-teal-900/60 shadow-[0_0_20px_rgba(20,184,166,0.6)]" : ""
      )}>
        <Combine className="w-4 h-4 text-teal-300" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-mono text-teal-200/70 tracking-wider uppercase">{title}</span>
        {hasExplanation && (
          <button
            type="button"
            aria-label="Explain Retrieval–Uncertainty Cross-Check"
            onClick={(event) => {
              event.stopPropagation();
              onInfoClick?.(id, event);
            }}
            className="rounded-full text-teal-200/60 transition hover:text-teal-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/70"
          >
            <Info className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
