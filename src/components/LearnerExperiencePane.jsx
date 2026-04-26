import { useState } from "react";
import { ArrowRight, BookOpen, Mic, MicOff, Maximize2, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function LearnerExperiencePane({ currentStep = 1 }) {
  const [isListening, setIsListening] = useState(true);

  if (currentStep === 2) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col items-center justify-between pt-8 pb-2">
          <div className="relative w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
            <div className={cn(
              "absolute inset-0 rounded-full border transition-all duration-500",
              isListening
                ? "border-sky-500/40 bg-sky-900/10 shadow-[0_0_34px_rgba(14,165,233,0.22)] animate-[pulse_3.6s_ease-in-out_infinite]"
                : "border-slate-700/50 bg-slate-900/30 shadow-none"
            )} />
            <div className={cn(
              "absolute inset-4 rounded-full border transition-all duration-500",
              isListening
                ? "border-sky-400/60 bg-sky-800/20 shadow-[0_0_22px_rgba(14,165,233,0.34)] animate-[pulse_2.4s_ease-in-out_infinite]"
                : "border-slate-600/50 bg-slate-800/30"
            )} />
            <div className={cn(
              "absolute inset-8 rounded-full border-2 transition-all duration-500",
              isListening
                ? "border-sky-300 bg-sky-700/45 shadow-[0_0_18px_rgba(14,165,233,0.62)] scale-105"
                : "border-slate-500 bg-slate-800/70 scale-95"
            )} />
          </div>

          <div className="w-full max-w-[190px] h-8 flex items-center justify-center gap-1 opacity-70">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "voice-wave-bar w-1 rounded-full opacity-70 transition-all duration-500 origin-center",
                  isListening ? "bg-sky-400" : "bg-slate-600"
                )}
                style={{
                  height: isListening ? `${Math.max(14, Math.sin(i * 0.48) * 38 + 28)}%` : "18%",
                  animationDelay: `${i * 48}ms`,
                  animationDuration: `${720 + (i % 6) * 95}ms`,
                  animationPlayState: isListening ? "running" : "paused",
                }}
              />
            ))}
          </div>

          <p className="text-sm text-slate-300">{isListening ? "Listening..." : "Paused"}</p>

          <button
            type="button"
            aria-pressed={isListening}
            aria-label={isListening ? "Pause microphone" : "Start microphone"}
            onClick={() => setIsListening((current) => !current)}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border",
              isListening
                ? "bg-sky-950/70 border-sky-500/50 shadow-[0_0_18px_rgba(14,165,233,0.26)] hover:bg-sky-900/70"
                : "bg-red-950/80 border-red-500/60 shadow-[0_0_18px_rgba(239,68,68,0.2)] hover:bg-red-900/80"
            )}
          >
            {isListening ? (
              <Mic className="w-5 h-5 text-sky-100" />
            ) : (
              <MicOff className="w-5 h-5 text-red-100" />
            )}
          </button>

          <p className="text-center text-sm xl:text-base font-medium text-white max-w-xs leading-snug">
            “Doctor... the pain is getting worse. I feel sweaty and a bit light-headed.”
          </p>

          <div className="w-full rounded-xl border border-sky-500/25 bg-sky-950/15 p-4 shadow-xl backdrop-blur-md">
            <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Live station in progress
            </div>
            <h3 className="text-center text-sm xl:text-base font-semibold text-sky-100">Cold station encounter</h3>
            <p className="mt-2 text-center text-xs xl:text-sm leading-relaxed text-slate-300">
              The learner responds naturally through the live interaction. No checklist hints, no action menu, and no corrective prompts are shown.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col items-center justify-between gap-4 pt-6 pb-1">
          <div className="w-full rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-3 text-center shadow-[0_0_22px_rgba(16,185,129,0.12)]">
            <div className="mb-1.5 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Station complete
            </div>
            <p className="text-xs leading-relaxed text-slate-300">Feedback has not been shown yet.</p>
          </div>

          <div className="text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">Open self-evaluation</p>
            <h3 className="mt-2 text-2xl font-light leading-tight text-white">How do you think you did?</h3>
          </div>

          <div className="w-full rounded-xl border border-sky-500/25 bg-sky-950/15 p-4">
            <div className="grid gap-2 text-sm leading-snug text-slate-300">
              <p>What do you think went well?</p>
              <p>What felt most difficult during the station?</p>
              <p>Was there any moment where you felt unsure or overloaded?</p>
              <p>Is there anything you think you missed or would change?</p>
              <p>What do you think caused the difficult parts?</p>
            </div>
          </div>

          <p className="text-sm text-slate-300">{isListening ? "Listening..." : "Paused"}</p>

          <button
            type="button"
            aria-pressed={isListening}
            aria-label={isListening ? "Pause microphone" : "Start microphone"}
            onClick={() => setIsListening((current) => !current)}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border",
              isListening
                ? "bg-teal-950/70 border-teal-500/50 shadow-[0_0_18px_rgba(20,184,166,0.24)] hover:bg-teal-900/70"
                : "bg-red-950/80 border-red-500/60 shadow-[0_0_18px_rgba(239,68,68,0.2)] hover:bg-red-900/80"
            )}
          >
            {isListening ? (
              <Mic className="w-5 h-5 text-teal-100" />
            ) : (
              <MicOff className="w-5 h-5 text-red-100" />
            )}
          </button>

          <div className="w-full rounded-xl border border-slate-700/70 bg-slate-900/55 p-3 text-center">
            <p className="text-xs leading-relaxed text-slate-300">
              Reflection first. A few follow-up questions may come next. Feedback comes after this.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 4) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-between gap-3 pt-5 pb-1">
          <div className="rounded-xl border border-cyan-500/25 bg-cyan-950/15 p-3 text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-300">Reviewing evidence</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Let’s compare your reflection with what happened in the station.</p>
          </div>

          <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-3">
            <h3 className="text-sm font-semibold text-emerald-100">What you got right about your self-analysis</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">You recognised that the station became harder when the patient’s condition changed.</p>
          </div>

          <div className="rounded-xl border border-blue-500/25 bg-blue-950/15 p-3">
            <h3 className="text-sm font-semibold text-blue-100">What the evidence shows differently</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">One part needs recalibration: the delay was less about missing the topic and more about converting the safety cue into action under pressure.</p>
          </div>

          <div className="rounded-xl border border-violet-500/25 bg-violet-950/15 p-3">
            <h3 className="text-sm font-semibold text-violet-100">What this suggests internally</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">The support target is station handling under pressure: recognising the safety cue, acting earlier, and carrying that internal model into the next step.</p>
          </div>

          <div className="rounded-xl border border-slate-700/70 bg-slate-900/55 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Updated internal model statement</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              “I recognised the diagnosis, but I need to act sooner when instability changes the priority.”
            </p>
          </div>

          <button
            type="button"
            className="mx-auto rounded-full border border-teal-400/45 bg-teal-500/15 px-5 py-2 text-xs font-semibold text-teal-50 transition hover:bg-teal-500/25"
          >
            Continue toward Step 5 support selection
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 5) {
    const formatStats = [
      ["Cognitive load", "Medium"],
      ["Time burden", "12 min"],
      ["Content depth", "Applied"],
      ["Interactivity", "Guided"],
      ["Retrieval demand", "Moderate"],
      ["Transfer value", "High"],
    ];

    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-4 pb-1">
          <div className="rounded-xl border border-cyan-500/25 bg-cyan-950/15 p-3 shadow-[0_0_22px_rgba(34,211,238,0.08)]">
            <p className="text-sm leading-relaxed text-slate-200">
              Based on the correction we just made, the next step is to choose the learning format that is most likely to help you use that correction.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              I’ll show the format that currently looks like the best fit, plus two alternatives. You can choose any of them or browse the full library.
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            <button
              type="button"
              className="w-full rounded-xl border border-teal-400/45 bg-teal-500/15 p-4 text-left shadow-[0_0_24px_rgba(20,184,166,0.14)] transition hover:bg-teal-500/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 inline-flex rounded-full border border-teal-300/40 bg-teal-300/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] text-teal-100">
                    Recommended
                  </div>
                  <h3 className="text-base font-semibold text-white">Scenario Walkthrough</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Helps practise converting deterioration cues into immediate action without requiring a long content-heavy review right now.
                  </p>
                </div>
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-teal-200" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-teal-100/90">
                {["12 min", "medium load", "applied depth", "guided"].map((item) => (
                  <span key={item} className="rounded-full border border-teal-400/25 bg-teal-950/40 px-2 py-1">{item}</span>
                ))}
              </div>
            </button>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Decision Tree", "Best for choosing the next action under pressure.", "8 min", "low-medium load"],
                ["Cue Recognition Examples", "Best for noticing clinical changes before acting.", "10 min", "visual examples"],
              ].map(([title, description, time, load]) => (
                <button
                  key={title}
                  type="button"
                  className="rounded-xl border border-sky-500/25 bg-sky-950/15 p-3 text-left transition hover:bg-sky-950/25"
                >
                  <h4 className="text-sm font-semibold leading-snug text-sky-100">{title}</h4>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-300">{description}</p>
                  <div className="mt-3 flex flex-wrap gap-1 text-[9px] text-slate-300">
                    <span className="rounded-full border border-slate-600/60 px-1.5 py-0.5">{time}</span>
                    <span className="rounded-full border border-slate-600/60 px-1.5 py-0.5">{load}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-violet-500/25 bg-slate-900/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-violet-300">Active format detail</p>
                <h3 className="mt-1 text-base font-semibold text-white">Scenario Walkthrough</h3>
              </div>
              <SlidersHorizontal className="h-5 w-5 text-violet-200" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              A guided run-through of the same internal pattern: noticing the deterioration cue, choosing the next action, and carrying the corrected safety frame forward.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-teal-100/90">
              Recommended because this format helps practise converting deterioration cues into immediate action, without requiring a long content-heavy review right now.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {formatStats.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-700/70 bg-slate-950/55 px-2.5 py-2">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-slate-700/70 bg-slate-950/45 p-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">Personal fit estimate</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Not enough learner-specific data yet. This recommendation is based mainly on the current learning target, your current learning state, and the format’s general properties.
              </p>
            </div>

            <div className="mt-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">Optional ratings</p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                {["Helpful", "Difficult", "Heavy", "Clear"].map((item) => (
                  <span key={item} className="rounded-full border border-slate-600/70 px-2 py-1">{item}</span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button type="button" className="text-xs font-medium text-cyan-200 hover:text-cyan-100">View tutorial</button>
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-teal-400/45 bg-teal-500/20 px-4 py-2 text-xs font-semibold text-teal-50 transition hover:bg-teal-500/30"
              >
                Start selected format
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 6) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-4 pb-1">
          <div className="rounded-xl border border-teal-500/30 bg-teal-950/15 p-4 shadow-[0_0_24px_rgba(20,184,166,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-teal-300">Selected format</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Scenario Walkthrough</h3>
              </div>
              <BookOpen className="h-5 w-5 text-teal-200" />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Learning target: Turning deterioration cues into immediate action
            </p>
            <div className="mt-3">
              <div className="mb-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500">
                <span>Section 2 of 5</span>
                <span>40%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full w-2/5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.45)]" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-1.5">
            {["Cue", "Frame", "Action", "Check", "Carry"].map((item, index) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "rounded-lg border px-2 py-2 text-[10px] font-medium transition",
                  index === 1
                    ? "border-cyan-400/45 bg-cyan-500/15 text-cyan-100"
                    : "border-slate-700/70 bg-slate-900/50 text-slate-400 hover:text-slate-200"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-sky-500/25 bg-sky-950/15 p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-300">Current section preview</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">
              “When the patient becomes more unstable, your next action should be driven by the safety frame, not by continuing the diagnostic history routine.”
            </p>
            <div className="mt-4 rounded-lg border border-slate-700/70 bg-slate-950/50 p-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">Embedded interaction</p>
              <h4 className="mt-2 text-sm font-semibold text-slate-100">Which cue should trigger immediate reassessment?</h4>
              <div className="mt-3 grid gap-2">
                {["New diaphoresis and light-headedness", "Longer pain history", "Family history detail"].map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    className={cn(
                      "rounded-lg border px-3 py-2 text-left text-xs transition",
                      index === 0
                        ? "border-teal-400/35 bg-teal-500/10 text-teal-50"
                        : "border-slate-700/70 bg-slate-900/60 text-slate-300 hover:bg-slate-800/70"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <button
              type="button"
              className="rounded-xl border border-slate-700/70 bg-slate-900/55 p-3 text-left transition hover:bg-slate-900"
            >
              <p className="text-xs font-semibold text-cyan-100">Need help using this format?</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">Open a short tutorial without leaving the walkthrough.</p>
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-700/70 bg-slate-900/55 px-4 text-xs font-semibold text-slate-300 transition hover:bg-slate-900"
            >
              Pause
            </button>
          </div>

          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-teal-400/45 bg-teal-500/20 px-5 py-2.5 text-sm font-semibold text-teal-50 transition hover:bg-teal-500/30"
          >
            Continue to Quick Check
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 7) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-4 pb-1">
          <div className="rounded-xl border border-violet-500/30 bg-violet-950/15 p-4 shadow-[0_0_24px_rgba(139,92,246,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-violet-300">Quick Check</p>
                <h3 className="mt-1 text-lg font-semibold text-white">One short check before the re-entry station</h3>
              </div>
              <span className="rounded-full border border-violet-300/35 bg-violet-300/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-violet-100">
                Step 7 of 9
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Safety trigger", "cue-action", "concept access"].map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/25 bg-cyan-950/30 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Quick check before the next station. This is not a score. It helps check whether the key idea is now accessible enough to use.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-sky-500/25 bg-sky-950/15 p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-300">Check prompt</p>
            <h4 className="mt-2 text-base font-semibold leading-snug text-white">
              The patient with chest pain becomes pale, sweaty, and hypotensive. What should your thinking switch to first?
            </h4>
            <div className="mt-4 grid gap-2">
              {[
                "More detailed pain history",
                "Immediate safety reassessment",
                "Reassurance only",
                "Discharge advice",
              ].map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className={cn(
                    "rounded-lg border px-3 py-2.5 text-left text-xs transition",
                    index === 1
                      ? "border-teal-400/45 bg-teal-500/15 text-teal-50 shadow-[0_0_14px_rgba(20,184,166,0.12)]"
                      : "border-slate-700/70 bg-slate-900/55 text-slate-300 hover:bg-slate-800/70"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-700/70 bg-slate-900/55 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Confidence tap</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["Sure", "Somewhat sure", "Not sure yet"].map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={cn(
                    "rounded-full border px-2 py-2 text-[11px] font-medium transition",
                    index === 0
                      ? "border-teal-400/40 bg-teal-500/15 text-teal-50"
                      : "border-slate-700/70 bg-slate-950/45 text-slate-300 hover:bg-slate-800/70"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">Immediate feedback</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100">
              Good. You identified the correct switch: when the patient deteriorates, the priority moves back to immediate safety reassessment. Take that trigger into the re-entry station.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/15 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-300">Quick reset</p>
            <p className="mt-1 text-xs leading-relaxed text-amber-50/90">
              Diagnosis tells you what may be happening. Instability tells you what must happen first.
            </p>
          </div>

          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-teal-400/45 bg-teal-500/20 px-5 py-2.5 text-sm font-semibold text-teal-50 transition hover:bg-teal-500/30"
          >
            Continue to Re-Entry Station
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 8) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-4 pb-1">
          <div className="rounded-xl border border-cyan-500/25 bg-cyan-950/15 p-4 shadow-[0_0_24px_rgba(34,211,238,0.1)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-300">Short Re-Entry Station</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Use the key point in a slightly different situation.</h3>
              </div>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-100">
                Step 8 of 9
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-700/70 bg-slate-950/45 px-3 py-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">Short station · Focused re-entry</p>
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.65)]" />
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-sky-500/25 bg-sky-950/15 p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-300">Focused re-entry scenario</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">
              “You are asked to assess a patient with a related presentation. The situation is not the same as before, but it tests the same key correction under station conditions.”
            </p>
          </div>

          <div className="mt-4 grid gap-2">
            {[
              "Patient: I still feel tight in my chest.",
              "Nurse: The observations have changed slightly.",
              "Patient: I feel more light-headed now.",
            ].map((cue) => (
              <div key={cue} className="rounded-lg border border-slate-700/70 bg-slate-900/60 px-3 py-2.5">
                <p className="text-xs leading-relaxed text-slate-200">{cue}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-700/70 bg-slate-900/55 p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Focused actions</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                "Assess safety first",
                "Recheck observations",
                "Respond to cue",
                "Request help",
                "Explain next step",
              ].map((action, index) => (
                <button
                  key={action}
                  type="button"
                  className={cn(
                    "rounded-lg border px-3 py-2.5 text-left text-xs transition",
                    index === 0
                      ? "border-teal-400/45 bg-teal-500/15 text-teal-50"
                      : "border-slate-700/70 bg-slate-950/45 text-slate-300 hover:bg-slate-800/70"
                  )}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">Brief feedback</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100">
              You applied the key safety trigger more quickly in this version. The next step will use this evidence to plan your next station.
            </p>
          </div>

          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-teal-400/45 bg-teal-500/20 px-5 py-2.5 text-sm font-semibold text-teal-50 transition hover:bg-teal-500/30"
          >
            Continue to Step 9 Planning
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
      <div className="flex items-center gap-2 shrink-0">
        <Maximize2 className="w-5 h-5 text-slate-400" />
        <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
      </div>

      <div className="flex-1 min-h-0 flex flex-col items-center justify-between pt-8 pb-2">
        
        {/* Orb Visual Placeholder */}
        <div className="relative w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center">
          <div className={cn(
            "absolute inset-0 rounded-full border transition-all duration-500",
            isListening
              ? "border-blue-500/40 bg-blue-900/10 shadow-[0_0_34px_rgba(59,130,246,0.22)] animate-[pulse_3.6s_ease-in-out_infinite]"
              : "border-slate-700/50 bg-slate-900/30 shadow-none"
          )}></div>
          <div className={cn(
            "absolute inset-4 rounded-full border transition-all duration-500",
            isListening
              ? "border-blue-400/60 bg-blue-800/20 shadow-[0_0_22px_rgba(59,130,246,0.34)] animate-[pulse_2.4s_ease-in-out_infinite]"
              : "border-slate-600/50 bg-slate-800/30"
          )}></div>
          <div className={cn(
            "absolute inset-8 rounded-full border-2 transition-all duration-500",
            isListening
              ? "border-blue-300 bg-blue-700/50 shadow-[0_0_18px_rgba(59,130,246,0.62)] scale-105"
              : "border-slate-500 bg-slate-800/70 scale-95"
          )}></div>
        </div>

        {/* Waveform Placeholder */}
        <div className="w-full max-w-[190px] h-8 flex items-center justify-center gap-1 opacity-70">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i} 
               className={cn(
                 "voice-wave-bar w-1 rounded-full opacity-70 transition-all duration-500 origin-center",
                 isListening ? "bg-blue-400" : "bg-slate-600"
               )}
               style={{ 
                 height: isListening ? `${Math.max(14, Math.sin(i * 0.48) * 38 + 28)}%` : "18%",
                 animationDelay: `${i * 48}ms`,
                 animationDuration: `${720 + (i % 6) * 95}ms`,
                 animationPlayState: isListening ? "running" : "paused",
               }}
             ></div>
           ))}
        </div>

        <p className="text-sm text-slate-300">{isListening ? "Listening..." : "Paused"}</p>

        <button
          type="button"
          aria-pressed={isListening}
          aria-label={isListening ? "Pause microphone" : "Start microphone"}
          onClick={() => setIsListening((current) => !current)}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border",
            isListening
              ? "bg-blue-950/70 border-blue-500/50 shadow-[0_0_18px_rgba(59,130,246,0.26)] hover:bg-blue-900/70"
              : "bg-red-950/80 border-red-500/60 shadow-[0_0_18px_rgba(239,68,68,0.2)] hover:bg-red-900/80"
          )}
        >
          {isListening ? (
            <Mic className="w-5 h-5 text-blue-100" />
          ) : (
            <MicOff className="w-5 h-5 text-red-100" />
          )}
        </button>

        <p className="text-center text-sm xl:text-base font-medium text-white max-w-xs leading-snug">
          "You are going to manage a patient presenting with acute, crushing chest pain."
        </p>

        {/* Question Card */}
        <div className="w-full bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 shadow-xl backdrop-blur-md">
          <h3 className="text-blue-100 font-semibold mb-3 text-center text-sm xl:text-base">How will you approach this station?</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-300 italic text-center">What do you think this station requires?</p>
            <p className="text-sm text-slate-300 italic text-center">What do you remember about the topic?</p>
          </div>
        </div>

      </div>
    </div>
  );
}
