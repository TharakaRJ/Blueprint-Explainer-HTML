import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export function StepOverviewPane({ currentStep = 1, onNavigate }) {
  if (currentStep === 3) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950/40 px-10 py-4 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <BookOpen className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Step Overview</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col max-w-3xl">
          <div>
            <h1 className="text-[2rem] leading-tight font-light text-slate-100 mb-4 tracking-wide">Step 3: Self-Evaluation</h1>

            <p className="text-slate-300 leading-6 text-[0.92rem] xl:text-[0.98rem]">
              Step 3 captures what the learner believes happened after the station, before the system reveals feedback. It protects the learner’s uncorrected self-model, gently broadens reflection, clarifies only the most important rationale gaps, and prepares the evidence needed for Step 4 metacognitive correction.
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-teal-500/25 bg-teal-950/10 p-3">
              <h4 className="text-teal-300 font-semibold mb-2 uppercase tracking-wider text-xs">What this step captures</h4>
              <ul className="space-y-1.5 text-[0.82rem] leading-5 text-slate-300">
                <li>What the learner thinks went well</li>
                <li>What they think they missed</li>
                <li>How confident or uncertain they feel</li>
                <li>Why they think they acted, delayed, or omitted actions</li>
                <li>Whether they noticed safety issues, communication gaps, cue-response failures, or overload</li>
                <li>Whether they report simulation or interface friction</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-3">
              <h4 className="text-slate-200 font-semibold mb-2 uppercase tracking-wider text-xs">What this step does not do</h4>
              <ul className="space-y-1.5 text-[0.82rem] leading-5 text-slate-400">
                <li>It does not teach</li>
                <li>It does not correct</li>
                <li>It does not score</li>
                <li>It does not reveal the checklist</li>
                <li>It does not decide the final learning format</li>
                <li>It does not decide the final next station</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-3 backdrop-blur-sm">
              <h4 className="text-blue-400 font-semibold mb-1.5 uppercase tracking-wider text-xs">Key principle</h4>
              <p className="text-blue-200/80 text-[0.86rem] leading-5">
                Open reflection comes first. The system captures the learner’s self-model before any feedback changes it.
              </p>
            </div>
          </div>

          <div className="mt-4 shrink-0">
            <button
              onClick={onNavigate}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-teal-600/20 border border-teal-500/50 rounded-full hover:bg-teal-600/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
            >
              Continue to Intelligence Map
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="flex flex-col h-full min-h-0 bg-slate-950/40 px-10 py-4 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <BookOpen className="w-5 h-5 text-slate-400" />
          <h2 className="text-sm tracking-widest text-slate-300 uppercase">Step Overview</h2>
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-between max-w-3xl overflow-y-auto pr-1">
          <div className="min-h-0">
            <h1 className="text-[1.65rem] xl:text-[1.8rem] leading-tight font-light text-slate-100 mb-2.5 tracking-wide">Cold Station Performance</h1>

            <div className="space-y-2 text-slate-300 leading-[1.2rem] text-[0.78rem] xl:text-[0.9rem] xl:leading-5">
              <p>
                Step 2 throws the learner into the clinical deep end before any pre-teaching or topic review can shape their response. In many traditional OSCE practice sessions, learners review the topic first, hold a structure in short-term memory, and then perform by acting out that recent memory. That can make the performance look cleaner than the learner’s deeper station-handling ability really is.
              </p>
              <p>
                This step is designed to reveal what happens before that rehearsal layer takes over. The system observes how the learner actually behaves when they must rely on their current task framing, accessible knowledge, safety instincts, cue recognition, communication judgement, and ability to recover under pressure.
              </p>
              <p>
                The value is not just scoring the station. The learner is also developing transferable station-handling skill through the experience itself: recognising pressure, adapting to cues, prioritising safety, and discovering where their own thinking breaks down.
              </p>
              <p>
                The performance evidence from this step becomes the bridge between Step 1 and Step 3: what the learner expected before the station, what they actually did inside the station, and what they later believe happened.
              </p>
            </div>
          </div>

          <div className="mt-2.5">
            <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-2.5 backdrop-blur-sm">
              <h4 className="text-blue-400 font-semibold mb-1 uppercase tracking-wider text-[0.68rem]">Key principle</h4>
              <p className="text-blue-200/80 text-[0.76rem] xl:text-[0.84rem] leading-[1.15rem] xl:leading-5">
                Step 2 is a deep-end experiential diagnostic. It prevents short-term-memory rehearsal from masking the learner’s real station-handling process, then captures the evidence needed for self-evaluation, metacognitive correction, adaptive learning, and future station scheduling.
              </p>
            </div>
          </div>

          <div className="mt-2.5 shrink-0 pb-1">
            <button 
              onClick={onNavigate}
              className="group relative inline-flex items-center justify-center px-5 py-2 text-xs xl:text-sm font-semibold text-white transition-all duration-300 bg-teal-600/20 border border-teal-500/50 rounded-full hover:bg-teal-600/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
            >
              Continue to Intelligence Map
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-0 bg-slate-950/40 px-10 py-5 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-5 shrink-0">
        <BookOpen className="w-5 h-5 text-slate-400" />
        <h2 className="text-sm tracking-widest text-slate-300 uppercase">Step Overview</h2>
      </div>

      <div className="flex-1 min-h-0 flex flex-col max-w-3xl">
        <div>
          <h1 className="text-[2rem] leading-tight font-light text-slate-100 mb-4 tracking-wide">Initial Problem Framing</h1>
        
          <div className="space-y-3 text-slate-300 leading-6 text-[0.92rem] xl:text-[0.98rem]">
            <p>
              Step 1 captures the learner’s internal operating model before the cold station begins. The learner receives a brief authentic prompt and answers from their own current understanding, without teaching, hints, or corrective framing.
            </p>
            
            <p>
              The system uses this response to form the pre-station baseline: how the learner frames the task, what knowledge is currently accessible, how uncertain they are, how much cognitive room they have, and what prior learner-state context is relevant.
            </p>

            <p>
              This baseline is later compared with station performance and post-station reflection to support metacognitive correction, adaptive learning, and future station scheduling.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-3 backdrop-blur-sm">
            <h4 className="text-blue-400 font-semibold mb-1.5 uppercase tracking-wider text-xs">Key principle</h4>
            <p className="text-blue-200/80 text-[0.86rem] leading-5">
              No pre-teaching. No checklist correction. No final decisions yet. Step 1 creates the first reference point for the adaptive cycle.
            </p>
          </div>
        </div>

        <div className="mt-4 shrink-0 xl:mt-6">
          <button 
            onClick={onNavigate}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-teal-600/20 border border-teal-500/50 rounded-full hover:bg-teal-600/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5"
          >
            Continue to Intelligence Map
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
