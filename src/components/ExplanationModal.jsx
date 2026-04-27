import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowDown, ArrowRight, Blocks, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

const accentStyles = {
  blue: {
    text: "text-blue-300",
    border: "border-blue-400/25",
    bg: "bg-blue-950/20",
    glow: "shadow-[0_0_70px_rgba(37,99,235,0.24)]",
    ring: "focus-visible:ring-blue-300/70",
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-400/25",
    bg: "bg-purple-950/20",
    glow: "shadow-[0_0_70px_rgba(147,51,234,0.22)]",
    ring: "focus-visible:ring-purple-300/70",
  },
  teal: {
    text: "text-teal-300",
    border: "border-teal-400/25",
    bg: "bg-teal-950/20",
    glow: "shadow-[0_0_70px_rgba(20,184,166,0.2)]",
    ring: "focus-visible:ring-teal-300/70",
  },
  green: {
    text: "text-emerald-300",
    border: "border-emerald-400/25",
    bg: "bg-emerald-950/20",
    glow: "shadow-[0_0_70px_rgba(16,185,129,0.18)]",
    ring: "focus-visible:ring-emerald-300/70",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/25",
    bg: "bg-cyan-950/20",
    glow: "shadow-[0_0_70px_rgba(34,211,238,0.2)]",
    ring: "focus-visible:ring-cyan-300/70",
  },
};

function Section({ title, children, className }) {
  return (
    <section className={cn("card-shell space-y-3", className)}>
      {title && <h3 className="text-base font-semibold text-slate-50">{title}</h3>}
      {children}
    </section>
  );
}

function getSectionText(section) {
  return section.text || section.emphasis || section.reading || "";
}

function splitFlowText(value) {
  if (!value) return [];
  return String(value)
    .split(/\s*(?:→|↔|\+|\/|,|\n)\s*/g)
    .map((item) => item.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

function normalizeFormat(value = "") {
  return value
    .toLowerCase()
    .replace(/[↔]/g, " compare ")
    .replace(/[→]/g, " flow ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function SectionFrame({ children, accent, className, tone = "default" }) {
  const styles = accentStyles[accent] ?? accentStyles.blue;
  const toneClass =
    tone === "warning"
      ? "border-amber-400/30 bg-amber-950/10"
      : tone === "blueprint"
        ? "border-slate-600/70 bg-slate-950/45"
        : cn(styles.border, styles.bg);

  return (
    <div className={cn("format-body rounded-xl border p-4", toneClass, className)}>
      {children}
    </div>
  );
}

function TechnicalPill({ children, accent, className }) {
  const styles = accentStyles[accent] ?? accentStyles.blue;
  return (
    <span className={cn("technical-pill inline-flex max-w-full rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider", styles.border, styles.text, className)}>
      {children}
    </span>
  );
}

function PlainCard({ item, accent }) {
  const [plain, internal, text] = item;
  const styles = accentStyles[accent] ?? accentStyles.blue;

  return (
    <div className={cn("rounded-lg border bg-slate-950/50 p-3", styles.border)}>
      <h4 className="text-sm font-semibold leading-snug text-slate-50">{plain}</h4>
      {internal && (
        <p className={cn("mt-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider", styles.border, styles.text)}>
          {internal}
        </p>
      )}
      {text && <p className="mt-2 text-xs leading-relaxed text-slate-300">{text}</p>}
    </div>
  );
}

function MiniFlow({ items, accent, labelled = true }) {
  const styles = accentStyles[accent] ?? accentStyles.blue;

  return (
    <div className="flow-diagram flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch" aria-label="Flow diagram">
      {items.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <span className={cn("flow-node flex min-h-11 min-w-0 flex-1 items-center rounded-lg border bg-slate-950/50 px-3 py-2 text-xs font-medium leading-snug text-slate-100", styles.border)}>
            <span className={cn("mr-2 shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-mono", styles.border, styles.text)}>
              {index === 0 ? "Input" : index === items.length - 1 ? "Output" : "Process"}
            </span>
            <span className="min-w-0">{item}</span>
          </span>
          {index < items.length - 1 && (
            <span className={cn("flow-arrow hidden items-center justify-center gap-1 text-[10px] font-mono uppercase tracking-wider sm:flex", styles.text)}>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              {labelled && <span>then</span>}
            </span>
          )}
          {index < items.length - 1 && (
            <span className={cn("flow-arrow flex items-center gap-2 pl-3 text-[10px] font-mono uppercase tracking-wider sm:hidden", styles.text)}>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              {labelled && <span>then</span>}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function DataTable({ section }) {
  return (
    <div className="matrix-grid overflow-x-auto rounded-xl border border-slate-700/70">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead className="bg-slate-950/80 text-xs uppercase tracking-wider text-slate-400">
          <tr>
            {section.columns.map((column) => (
              <th key={column} className="border-b border-slate-800 px-3 py-2 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`} className="bg-slate-950/35 odd:bg-slate-900/30">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="border-t border-slate-800/70 px-3 py-2 align-top text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RenderQuickSection({ section, accent }) {
  const styles = accentStyles[accent] ?? accentStyles.blue;
  const sectionText = getSectionText(section);
  const normalized = normalizeFormat(sectionText);

  if (section.type === "callout") {
    return (
      <Section title={section.title}>
        <SectionFrame accent={accent} className="core-idea-block">
          <p className="text-base leading-relaxed text-slate-100">{section.text}</p>
          {section.emphasis && (
            <p className={cn("mt-4 border-l-2 pl-4 text-sm leading-relaxed", styles.border, styles.text)}>
              {section.emphasis}
            </p>
          )}
        </SectionFrame>
      </Section>
    );
  }

  if (section.type === "question") {
    return (
      <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Plain explanation</p>
        <p className="mt-2 text-lg font-medium text-slate-50">“{section.text}”</p>
      </div>
    );
  }

  if (section.type === "plainGrid") {
    return (
      <Section title={section.title}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item) => (
            <PlainCard key={`${item[0]}-${item[1]}`} item={item} accent={accent} />
          ))}
        </div>
      </Section>
    );
  }

  if (section.type === "contrast") {
    return (
      <Section title={section.title}>
        <div className="compare-panel rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
          <p className="mb-3 text-sm text-slate-300">{section.text}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {section.items.map(([label, text]) => (
              <PlainCard key={label} item={[label, "", text]} accent={accent} />
            ))}
          </div>
        </div>
      </Section>
    );
  }

  if (section.type === "example") {
    return (
      <Section title={section.title}>
        <div className="ledger-trace rounded-xl border border-slate-700/70 bg-slate-950/70 p-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">Prompt</p>
              <p className="mt-1 text-sm font-medium text-slate-100">{section.prompt}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">Learner response</p>
              <p className="mt-1 text-sm font-medium text-slate-100">{section.response}</p>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-800 pt-4">
            <p className={cn("text-[10px] font-mono uppercase tracking-[0.18em]", styles.text)}>System reading</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">{section.reading}</p>
            <p className={cn("mt-3 rounded-lg border p-3 text-sm leading-relaxed", styles.border, styles.bg, styles.text)}>
              {section.important}
            </p>
          </div>
        </div>
      </Section>
    );
  }

  if (section.type === "flow") {
    return (
      <Section title={section.title}>
        <SectionFrame accent={accent}>
          <MiniFlow items={section.flow} accent={accent} />
          {section.text && <p className="mt-3 text-sm leading-relaxed text-slate-300">{section.text}</p>}
        </SectionFrame>
      </Section>
    );
  }

  if (section.type === "ladder") {
    return (
      <Section title={section.title}>
        <div className="state-meter grid gap-2">
          {section.items.map(([label, text], index) => (
            <div key={label} className="grid grid-cols-[32px_1fr] gap-3 rounded-lg border border-slate-700/70 bg-slate-950/50 p-3">
              <span className={cn("flex h-8 w-8 items-center justify-center rounded-full border text-xs font-mono", styles.border, styles.text)}>
                {index + 1}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-slate-100">{label}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (section.type === "warning") {
    return (
      <Section title={section.title}>
        <SectionFrame accent={accent} tone="warning" className="warning-callout flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-slate-200">{section.text}</p>
        </SectionFrame>
      </Section>
    );
  }

  if (section.type === "text") {
    const isSelectedFormat = /selected learning format/i.test(section.title || "");
    const flowItems = splitFlowText(section.text);
    const shouldRenderFlow =
      isSelectedFormat &&
      flowItems.length >= 2 &&
      (section.text.includes("→") || normalized.includes("matrix") || normalized.includes("model") || normalized.includes("pathway") || normalized.includes("chain"));

    return (
      <Section title={section.title}>
        <SectionFrame accent={accent} className={cn(shouldRenderFlow ? "flow-diagram-shell" : "")}>
          {shouldRenderFlow ? (
            <>
              <MiniFlow items={flowItems.slice(0, 6)} accent={accent} />
              <p className="sr-only">{section.text}</p>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-slate-300">{section.text}</p>
          )}
        </SectionFrame>
      </Section>
    );
  }

  if (section.type === "twoColumn") {
    return (
      <Section title={section.title}>
        <div className="compare-panel grid gap-3 md:grid-cols-2">
          {[
            [section.leftTitle, section.leftItems],
            [section.rightTitle, section.rightItems],
          ].map(([title, items]) => (
            <div key={title} className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
              <h4 className="font-semibold text-slate-100">{title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (section.type === "table") return <Section title={section.title}><DataTable section={section} /></Section>;

  if (section.type === "chips") {
    return (
      <Section title={section.title}>
        <div className="flex flex-wrap gap-2">
          {section.items.map((item) => (
            <span key={item} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium", styles.border, styles.bg, styles.text)}>
              {item}
            </span>
          ))}
        </div>
      </Section>
    );
  }

  if (section.type === "list") {
    return (
      <Section title={section.title}>
        <div className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
          <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", styles.text)} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  }

  if (section.type === "twoModes") {
    return (
      <Section title={section.title}>
        <div className="grid gap-3 md:grid-cols-2">
          {section.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-4">
              <h4 className="font-semibold text-slate-100">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{item.goal}</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-slate-500">Instead of: “{item.before}”</p>
                <p className={styles.text}>Use: “{item.after}”</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return null;
}

function RenderBlueprintSection({ section, accent }) {
  const styles = accentStyles[accent] ?? accentStyles.blue;

  if (section.type === "flow") {
    return (
      <Section title={section.title}>
        <SectionFrame accent={accent} tone="blueprint">
          <MiniFlow items={section.flow} accent={accent} />
        </SectionFrame>
      </Section>
    );
  }

  if (section.type === "compare") {
    return (
      <Section title={section.title}>
        <div className="compare-panel grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/25 bg-red-950/10 p-4">
            <h4 className="text-sm font-semibold text-red-200">{section.leftLabel}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.leftText}</p>
          </div>
          <div className={cn("rounded-xl border p-4", styles.border, styles.bg)}>
            <h4 className={cn("text-sm font-semibold", styles.text)}>{section.rightLabel}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.rightText}</p>
          </div>
        </div>
      </Section>
    );
  }

  if (section.type === "text") {
    const isSelectedFormat = /selected learning format/i.test(section.title || "");
    const flowItems = splitFlowText(section.text);

    if (isSelectedFormat && flowItems.length >= 2) {
      return (
        <Section title={section.title}>
          <SectionFrame accent={accent} tone="blueprint">
            <MiniFlow items={flowItems.slice(0, 6)} accent={accent} />
            <p className="sr-only">{section.text}</p>
          </SectionFrame>
        </Section>
      );
    }

    return (
      <Section title={section.title}>
        <SectionFrame accent={accent} tone="blueprint">
          <p className="text-sm leading-relaxed text-slate-300">{section.text}</p>
        </SectionFrame>
      </Section>
    );
  }

  return <RenderQuickSection section={section} accent={accent} />;
}

function ModalHeader({ card, view, styles }) {
  const activeTitle = view === "quick" && card.quickTitle ? card.quickTitle : card.title;
  const roleLabel = view === "quick" ? "Explanatory card" : "Blueprint card";

  return (
    <div className="card-header min-w-0">
      <div className="flex flex-wrap items-center gap-2">
        <p className={cn("text-[11px] font-mono uppercase tracking-[0.24em]", styles.text)}>{card.categoryLabel}</p>
        <TechnicalPill accent={card.accent}>{roleLabel}</TechnicalPill>
        {card.status && (
          <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider", styles.border, styles.text)}>
            {card.status}
          </span>
        )}
      </div>
      <h2 id="explanation-modal-title" className="mt-2 text-2xl font-light tracking-wide text-white sm:text-3xl">
        {activeTitle}
      </h2>
      {view === "quick" && card.quickTitle && (
        <p className={cn("mt-2 inline-flex max-w-full rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider", styles.border, styles.text)}>
          {card.title}
        </p>
      )}
      {view === "blueprint" && (
        <p className={cn("mt-2 inline-flex max-w-full rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider", styles.border, styles.text)}>
          {card.title}
        </p>
      )}
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-400">{card.subtitle}</p>
    </div>
  );
}

export function ExplanationModal({ card, onClose, returnFocusTo }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [viewState, setViewState] = useState({ cardId: null, mode: "quick" });
  const view = viewState.cardId === card?.id ? viewState.mode : "quick";
  const styles = accentStyles[card?.accent] ?? accentStyles.blue;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusTo?.focus?.();
    };
  }, [onClose, returnFocusTo]);

  if (!card) return null;

  const activeSections = view === "quick" ? card.quickViewContent : card.blueprintContent;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-6 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="explanation-modal-title"
        className={cn(
          "relative max-h-[calc(100vh-48px)] w-full max-w-6xl overflow-y-auto rounded-2xl border bg-[#07101e]/95 p-6 text-slate-200 scrollbar-none",
          styles.border,
          styles.glow
        )}
      >
        <div className={cn("flex flex-col gap-4 border-b pb-5 sm:flex-row sm:items-start sm:justify-between", styles.border)}>
          <ModalHeader card={card} view={view} styles={styles} />
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setViewState({
                  cardId: card?.id,
                  mode: view === "quick" ? "blueprint" : "quick",
                })
              }
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2",
                styles.border,
                styles.text,
                styles.ring
              )}
            >
              {view === "quick" ? "Blueprint details" : "Back to quick explanation"}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close explanation"
              onClick={onClose}
              className={cn(
                "rounded-full border border-slate-700 bg-slate-950/80 p-2 text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2",
                styles.ring
              )}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-5">
          {view === "blueprint" && (
            <div className={cn("handoff-bundle rounded-xl border p-4", styles.border, styles.bg)}>
              <div className="flex items-start gap-3">
                <Blocks className={cn("mt-1 h-5 w-5 shrink-0", styles.text)} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Blueprint details</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Technical internal architecture for presenter reference.
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeSections.map((section, index) =>
            view === "quick" ? (
              <RenderQuickSection key={`${section.title}-${index}`} section={section} accent={card.accent} />
            ) : (
              <RenderBlueprintSection key={`${section.title}-${index}`} section={section} accent={card.accent} />
            )
          )}
        </div>
      </article>
    </div>
  );
}
