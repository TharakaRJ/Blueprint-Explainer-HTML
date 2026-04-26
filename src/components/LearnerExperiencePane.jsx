import React, { useState } from "react";
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
            <div className="absolute inset-0 rounded-full border border-sky-500/40 bg-sky-900/10 shadow-[0_0_34px_rgba(14,165,233,0.22)] animate-[pulse_3.6s_ease-in-out_infinite]" />
            <div className="absolute inset-4 rounded-full border border-sky-400/60 bg-sky-800/20 shadow-[0_0_22px_rgba(14,165,233,0.34)] animate-[pulse_2.4s_ease-in-out_infinite]" />
            <div className="absolute inset-8 rounded-full border-2 border-sky-300 bg-sky-700/45 shadow-[0_0_18px_rgba(14,165,233,0.62)]" />
          </div>

          <div className="w-full max-w-[190px] h-8 flex items-center justify-center gap-1 opacity-70">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="voice-wave-bar w-1 rounded-full bg-sky-400 opacity-70 origin-center"
                style={{
                  height: `${Math.max(14, Math.sin(i * 0.48) * 38 + 28)}%`,
                  animationDelay: `${i * 48}ms`,
                  animationDuration: `${720 + (i % 6) * 95}ms`,
                }}
              />
            ))}
          </div>

          <p className="text-sm text-slate-300">Listening...</p>

          <div className="w-12 h-12 rounded-full flex items-center justify-center border bg-sky-950/70 border-sky-500/50 shadow-[0_0_18px_rgba(14,165,233,0.26)]">
            <Mic className="w-5 h-5 text-sky-100" />
          </div>

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
    const reflectionCards = [
      ["The station is complete", "Before seeing feedback, the learner is asked to describe how they think the station went."],
      ["Open self-evaluation", "“The station is complete. Before seeing feedback, take a moment to describe how you think it went in your own words. What went well, what felt difficult, and what do you think you may have missed?”"],
      ["Example learner response", "“I think I missed part of the management. I focused on the history and I probably delayed treatment. I’m not sure if I handled the stabilisation properly.”"],
      ["Gentle domain prompt", "“You’ve explained the management part. How do you feel you handled the patient’s communication needs?”"],
      ["Targeted clarification transition", "“I have a few more specific questions about moments in the station. These are not feedback yet. They help understand what was happening from your side before the system compares everything.”"],
      ["Specific clarification example", "“When the patient’s condition changed, what were you thinking at that moment?”"],
    ];

    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950 px-6 py-5 relative">
        <div className="flex items-center gap-2 shrink-0">
          <Maximize2 className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Learner Experience</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-between gap-2 pt-5 pb-1">
          {reflectionCards.map(([title, body], index) => (
            <div
              key={title}
              className={cn(
                "rounded-xl border p-3",
                index === 0
                  ? "border-teal-500/35 bg-teal-950/20 shadow-[0_0_20px_rgba(20,184,166,0.12)]"
                  : "border-slate-700/60 bg-slate-900/55"
              )}
            >
              <p className="text-[11px] font-semibold text-slate-100">{title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
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
