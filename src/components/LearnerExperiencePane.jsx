import { useState } from "react";
import { Mic, MicOff, Maximize2 } from "lucide-react";
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
