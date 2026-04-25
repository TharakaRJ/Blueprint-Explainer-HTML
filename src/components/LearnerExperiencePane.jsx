import React, { useState } from "react";
import { Activity, Clock, Mic, MicOff, Maximize2, MessageSquare, Stethoscope } from "lucide-react";
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

        <div className="flex-1 min-h-0 flex flex-col justify-between pt-7 pb-2">
          <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-4 shadow-[0_0_24px_rgba(14,165,233,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-sky-300">Active station</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Acute chest pain station</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-950/70 px-3 py-1.5 text-sky-100">
                <Clock className="h-4 w-4" />
                <span className="font-mono text-sm">07:42</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Live OSCE station in progress
            </div>
          </div>

          <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">
            <div className="mb-3 flex items-center gap-2 text-slate-400">
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em]">Patient speech</span>
            </div>
            <p className="text-base leading-relaxed text-white">
              “Doctor… the pain is getting worse. I feel sweaty and a bit light-headed.”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {["Talk to patient", "Request observations", "Examine", "Investigations", "Treat / Escalate"].map((action) => (
              <button key={action} className="rounded-lg border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-300">
                {action}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-700/60 bg-slate-950/70 p-4">
            <div className="mb-3 flex items-center gap-2 text-slate-400">
              <Activity className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em]">Clinical log preview</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Patient reports worsening central chest pain.</li>
              <li>Learner asks about pain radiation.</li>
              <li>Patient appears clammy and anxious.</li>
              <li>Monitoring not yet requested.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-slate-500" />
              Vitals/monitoring available only when requested.
            </div>
          </div>
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
